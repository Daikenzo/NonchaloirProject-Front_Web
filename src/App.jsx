// Import Files 
import logo from './img/ico/logo.svg';
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Import Custom CSS
import './css/App.css';
import Header from './components/Display/header';
import HeaderTest from './debug/SampleComponents/header.test';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
    </div>
  );
}

export default App;
