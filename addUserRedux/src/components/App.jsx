import "../styles/App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import UpdateUser from "../components/UpdateUser";
import UsersListing from "../components/UsersListing";
import AddUser from "../components/AddUser";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/user"}>
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UsersListing />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:code" element={<UpdateUser />} />
      </Routes>
      <ToastContainer className={"toast-position"} position="bottom-right" />
    </div>
  );
}

export default App;
