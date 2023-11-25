import { Link, useParams } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay"
import { GetUserInfo, userIsloggin } from "../../../debug/sampleBd/users";

const NavBarMenu = ({login}) => {
    // console.log(login)

    // Display
    return (
        <nav className="Header-nav nav">
            <ul className="App-nav nav-menu">
                <Link className="nav-item App-link" to={"/"}><li className="nav-item" id="title">Théâtre du Nonchaloir
                <LogoDisplay classadd={"nav-item"}/></li></Link>
                <Link className="nav-item App-link" to={"/events"}><li className="nav-item"><div><p>Spectacles / </p><p> Évènenements</p></div></li></Link>
               <Link className="nav-item App-link" to={"/teams"}><li className="nav-item">Notre troupes</li></Link>
               <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos réalisations</li></Link>
               {/* <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos Ateliers</li></Link> */}
                
                {login.isLogin !== false? (
                    <>
                        {login.role==="admin" && ( 
                            <Link className="nav-item nav-right App-link" to={"/dashboard"}><li className="nav-item">Dashboard</li></Link>
                        )}
                        <Link className="nav-item nav-right App-link" to={`/user/${login.id}`}><li className="nav-item" id="user-logged">Bienvenue, <span>{login.name}</span></li></Link>
                    </>
                ): <Link className="nav-item nav-right App-link" to={"/login"}><li className="nav-item">Connexion</li></Link>}
            </ul>
        </nav>
    );
};

export default NavBarMenu;