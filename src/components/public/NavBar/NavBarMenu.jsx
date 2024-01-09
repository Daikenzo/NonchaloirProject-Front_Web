import { Link, useParams } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay"
import { GetUserInfo, userIsloggin } from "../../../debug/sampleBd/users";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const NavBarMenu = ({login, isLogin=false}) => {
    // console.log(login, isLogin)

    const loggedUsername = isLogin? (login.username !== login.email? login.username : login.name) : "invite";

    // Display
    return (
        <nav className="Header-nav nav">
            <ul className="App-nav nav-menu">
                <Link className="nav-item App-link header-link" to={"/"}><li className="nav-item" id="title">Théâtre du Nonchaloir
                <LogoDisplay classadd={"nav-item"}/></li></Link>
                <Link className="nav-item App-link header-link" to={"/events"}><li className="nav-item"><div><p>Spectacles / </p><p> Évènenements</p></div></li></Link>
                <Link className="nav-item App-link header-link" to={"/teams"}><li className="nav-item">Notre troupes</li></Link>
                <Link className="nav-item App-link header-link" to={"/projects"}><li className="nav-item">Nos réalisations</li></Link>
               {/* <Link className="nav-item App-link" to={"/ateliers"}><li className="nav-item">Nos Ateliers</li></Link> */}
                
                {isLogin ? (
                    <>
                        {login.role >=4 && ( 
                            <Link className="nav-item nav-right App-link header-link" to={"/dashboard"}><li className="nav-item">Dashboard</li></Link>
                        )}
                        <Link className="nav-item nav-right App-link header-link" to={`/user/${login.id}`}><li className="nav-item" id="user-logged">Bienvenue, <span>{loggedUsername}</span></li></Link>
                    </>
                ): <Link className="nav-item nav-right App-link header-link" to={"/login"}><li className="nav-item">Connexion</li></Link>}
            </ul>
        </nav>
    );
};

export default NavBarMenu;