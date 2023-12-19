import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
// Components
import LogoDisplay from "../../common/img/LogoDisplay"
import NavBarMenu from "../../public/NavBar/NavBarMenu"
import DashBoardNavBarMenu from "../../admin/Navbar/DashboardNavBarMenu";
// Test Data
import { UserDefault, userIsloggin, users } from "../../../debug/sampleBd/users";

const HeaderDisplay = ({dashboard=false}) => {
    // Get JWT Token
    const jwt = Cookies.get("jwt");
    const navigate = useNavigate();
    const [isconnected, setUserLoginStatut] = useState(false)
    const userData = jwt? (jwtDecode(jwt).data) :  (null);
    console.log("je lance le header")

    useEffect(() => {
        if (userData){
            setUserLoginStatut(true)
            if(dashboard && userData.role < 3){
                console.log("n'est pas admin")
                navigate("/")
            }
        } else{
            setUserLoginStatut(false)
            if(dashboard){
                console.log("n'est pas admin")
                navigate("/")
            }
        }
      }, []);

    return(
        <>
            {!dashboard ? (
            <header className="App App-header">
                <NavBarMenu login={userData} isLogin={isconnected}/>
            </header>) : (
                <header className="App App-header dashboard">
                <DashBoardNavBarMenu login={userData} isLogin={isconnected}/>
                </header>
            )}
        </>
        
    )
};

export default HeaderDisplay;