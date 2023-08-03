import React, { useEffect } from 'react'
import '../styles/UsersListing.css'
import {FetchUserList, RemoveUser} from '../redux/Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersListing = (props) => {
  useEffect(() => {
    props.loadUser();
  }, [])

  const handleDelete = (id) => {
    if (window.confirm('Do you want to delete this user?')) {
      props.removeUser(id);
      props.loadUser();
      toast.success('User deleted successfully')
    }
  }

  return (
    props.user.loading?  <div><h3>Loading...</h3></div> : 
    props.user.errMessage? <div><h2>{props.user.errMessage}</h2></div>:
    <div className='user-listing'>
      <div className="card">
        <div className='card-header text-right'>
          <Link to="/user/add" className='btn btn-success add-user'>Add User [+] </Link>
        </div> 
        <div className='card-body'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {
                props.user.userList && props.user.userList.map((item) => 
                  <tr key={item.id}>
                    <td className='bg-dark text-white'>{item.id}</td>
                    <td className='bg-dark text-white'>{item.name}</td>
                    <td className='bg-dark text-white'>{item.email}</td>
                    <td className='bg-dark text-white'>{item.phone}</td>
                    <td className='bg-dark text-white'>{item.role}</td>
                    <td className='bg-dark text-white'>
                      <Link to={`/user/edit/${item.id}`} className="btn btn-primary">Edit</Link>{'  |  '}  
                      <button onClick={() => {handleDelete(item.id)}} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(FetchUserList()),
    removeUser: (id) => dispatch(RemoveUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersListing)