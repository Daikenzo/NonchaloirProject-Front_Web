// Import Files 
import {users} from "./debug/sampleBd/users";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Import Custom CSS
import './App.scss';
// React
import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import  HomePage from "./pages/public/HomePage";
import ErrorPage from './pages/ErrorPage';
import DebugHome from './debug/pages/debug';
import AccountHomePage from "./pages/public/Account/AccountHomePage";
// import users from "./debug/sampleBd/users";


function App() {
  //Error Type Value (404: Not Found)
  

  //  console.log(users)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/user/:id" element={<AccountHomePage />}/>

        <Route path="/debug" element={<DebugHome/>}/>
        <Route path="*" element={<ErrorPage error={404}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
