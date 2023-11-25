// Import Files 
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Import Custom CSS
import './scss/var/_variables.scss'
import './App.scss';
// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page Components
import DebugHome from './debug/pages/debug';
import ErrorPage from './pages/ErrorPage';
  // Public
import HomePage from "./pages/public/HomePage";
import AccountHomePage from "./pages/public/Account/AccountHomePage";
import EventPage from "./pages/public/eventPage";
import ContactPage from "./pages/public/ContactPage";
import LoginPage from "./pages/public/login/loginPage";
  // Admin
import DashBoardPage from "./pages/admin/DashBoardPage";

// Main
function App() {
  
  

  //  console.log(users)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/user/:id" element={<AccountHomePage />}/>
        <Route path="/events" element={<EventPage />} />
        <Route path="/teams" element={<HomePage />} />
        <Route path="/project" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/dashboard" element={<DashBoardPage/>}/>

        <Route path="/debug" element={<DebugHome/>}/>
        <Route path="/admin/*" element={<ErrorPage dashboard= {true} error={404}/>} />
        <Route path="*" element={<ErrorPage error={404}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
