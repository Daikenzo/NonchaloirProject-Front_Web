import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header card-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
          Modifiez <code>src/App.js</code> et sauvegarder pour recharger.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
