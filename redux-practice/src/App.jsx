import './App.css'
import store from '../src/redux/store'
import {bugAdded, bugRemoved, bugResolved} from '../src/redux/actions'

function App() {
  store.subscribe(() => {
    console.log("Store changed!", store.getState())
  })
  store.dispatch(bugAdded('Bug1'))
  store.dispatch(bugAdded('Bug2'))
  store.dispatch(bugResolved(1))
  store.dispatch(bugRemoved(1))

    return (
    <>
    </>
  )
}

export default App
