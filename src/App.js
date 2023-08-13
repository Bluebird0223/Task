
import './App.css';
import Navbar from './components/Navbar';
import Lcard from './components/Lcard.jsx'
import Ccard from './components/Ccard';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Lcard/>
      <Ccard/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App;
