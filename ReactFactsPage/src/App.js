import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div>
          <Navbar/>
          <MainContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;