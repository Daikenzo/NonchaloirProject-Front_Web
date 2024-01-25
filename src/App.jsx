// Import Files 
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Import Custom CSS
import './scss/var/_variables.scss'
import './App.scss';
// React
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
// Page Components
import DebugHome from './debug/pages/debug';
import ErrorPage from './pages/ErrorPage';
  // Public
import HomePage from "./pages/public/HomePage";
import AccountHomePage from "./pages/public/Account/AccountHomePage";
import EventPage from "./pages/public/Events/EventPage";
import ContactPage from "./pages/public/ContactPage";
import LoginPage from "./pages/public/login/loginPage";
import AdherentPage from "./pages/public/AdherentPage";
  // Admin
import DashBoardPage from "./pages/admin/DashBoardPage";
import TeamPage from "./pages/public/TeamsPage";
import SignUpPage from "./pages/public/login/SignUpPage";
import DashboardEventsPage from "./pages/admin/Events/DisplayEventPage";
import DashboardUsersPage from "./pages/admin/Users/AdminUsersPage";
import AdminContactsMessagePage from "./pages/admin/Contacts/AdminContactsMessagePage";
import DashboardUsersCreatePage from "./pages/admin/Users/AdminCreateUsersPage"
import ReservationListPage from "./pages/admin/Events/Reservations/ReservationsPage";
import ReservationListByEventPage from "./pages/admin/Events/Reservations/ReservationsByEventPage";
import DashboardUpdateUserPage from "./pages/admin/Users/AdminUpdateUsersPage";
import DashboardEventsCreatePage from "./pages/admin/Events/AdminCreateEventPage";
import EventByIdPage from "./pages/public/Events/EventByIdPage";
// Main
function App() {
  //  console.log(users)
  const {error} = useParams();
  const setStatus = (status)=>{

    return status
  }
  const setErrorPath = (status)=>{

    return `error/`
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/login/signup" element={<SignUpPage/>} />

        <Route path="/teams" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/adherent" element={<AdherentPage />} />

        <Route path="/user/:id" element={<AccountHomePage />}/>
        <Route path="/projects" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:id" element={<EventByIdPage />} />
        
        {/* Admin */}
        <Route path="/dashboard" element={<DashBoardPage/>}/>
        <Route path="/dashboard/notifications" element={<AdminContactsMessagePage/>}/>

        <Route path="/dashboard/events" element={<DashboardEventsPage/>}/>
        <Route path="/dashboard/events/create" element={<DashboardEventsCreatePage/>}/>
        <Route path="/dashboard/events/:id" element={<DashboardEventsPage/>}/>
        <Route path="/dashboard/events/:id/reservations" element={<ReservationListByEventPage/>}/>
        <Route path="/dashboard/reservations" element={<ReservationListPage/>}/>

        <Route path="/dashboard/users" element={<DashboardUsersPage/>}/>
        <Route path="/dashboard/users/create" element={<DashboardUsersCreatePage/>}/>
        <Route path="/dashboard/users/:id/" element={<DashboardUpdateUserPage/>}/>
        <Route path="/dashboard/users/:id/update" element={<DashboardUpdateUserPage/>}/>
        
        {/* <Route path="/debug" element={<DebugHome/>}/> */}
        {/* Error Page */}
        <Route path="error/:id" element={<ErrorPage error={setStatus(error)}/>} />
        <Route path="/dashboard/error/:id" element={<ErrorPage dashboard={true} error={setStatus(error)}/>} />
        <Route path="/dashboard/*" element={<ErrorPage dashboard={true} error={404}/>} />
        <Route path="*" element={<ErrorPage error={setStatus(404)}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
