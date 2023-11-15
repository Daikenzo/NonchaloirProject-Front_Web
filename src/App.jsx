// Import Files 
import logo from './img/ico/Nonchaloir-logoV2.svg';
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Import Custom CSS
import './App.scss';
// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/HomePage"
import ErrorPage from './pages/ErrorPage';
import DebugHome from './debug/pages/debug';

function App() {

  //Error Type Value (404: Not Found)
  const errorType = [404];
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home logo={logo}/>}/>
        
        <Route path="/debug" element={<DebugHome logo={logo}/>}/>
        <Route path="*" element={<ErrorPage logo={logo} error={errorType[0]}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
