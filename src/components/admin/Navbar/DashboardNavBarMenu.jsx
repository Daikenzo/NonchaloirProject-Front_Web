import { Link } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay";
import './Dashboard.scss'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const DashBoardNavBarMenu = ({login, isLogin}) => {
    // Check login Statut
    const loggedUsername = isLogin? (login.username !== login.email? login.username : login.name) : "invite";
    // console.log(login)

    // useEffect(() => {
    //     if (login){
    //         setUserLoginStatut(true)
    //     } else{
    //         setUserLoginStatut(false)
    //     }
    //   }, []);
    // Display
    return (
        <nav className="Header-nav nav dashboard">
            <ul className="App-nav nav-menu">
            {isLogin && login.role >=4 && (
                    <>
                <Link className="nav-item App-link header-link" to={"/dashboard"}><li className="nav-item" id="title">Théâtre du Nonchaloir
                <LogoDisplay classadd={"nav-item"}/></li></Link>
                <Link className="nav-item App-link header-link" to={"/dashboard/events"}><li className="nav-item"><div><p>Spectacles / </p><p> Évènenements</p></div></li></Link>
                <Link className="nav-item App-link header-link" to={"/dashboard/teams"}><li className="nav-item">Notre troupes</li></Link>
                <Link className="nav-item App-link header-link" to={"/dashboard/projects"}><li className="nav-item">Nos réalisations</li></Link>
               {/* <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos Ateliers</li></Link> */}
               </>
                )}
                
                        <li className="nav-item nav-right dashboard-userInfo" id="user-logged">Connecté en tant que <span>{loggedUsername}</span></li>
                        
                            <Link className="nav-item nav-right App-link header-link" to={"/"}><li className="nav-item">Revenir au site</li></Link>
                        
                        
                
            </ul>
        </nav>
    );
};

export default DashBoardNavBarMenu;