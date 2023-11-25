import { Link } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay";
import './Dashboard.scss'

const DashBoardNavBarMenu = ({login}) => {
    // console.log(login)

    // Display
    return (
        <nav className="Header-nav nav dashboard">
            <ul className="App-nav nav-menu">
            {login.isLogin !== false && login.role === "admin" && (
                    <>
                <Link className="nav-item App-link" to={"/dashboard"}><li className="nav-item" id="title">Théâtre du Nonchaloir
                <LogoDisplay classadd={"nav-item"}/></li></Link>
                <Link className="nav-item App-link" to={"/admin/events"}><li className="nav-item"><div><p>Spectacles / </p><p> Évènenements</p></div></li></Link>
                <Link className="nav-item App-link" to={"/admin/teams"}><li className="nav-item">Notre troupes</li></Link>
                <Link className="nav-item App-link" to={"/admin/projects"}><li className="nav-item">Nos réalisations</li></Link>
               {/* <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos Ateliers</li></Link> */}
               </>
                )}
                
                        <li className="nav-item nav-right fw-bold" id="user-logged">Connecté en tant que <span>{login.name}</span></li>
                        
                            <Link className="nav-item nav-right App-link" to={"/"}><li className="nav-item">Revenir au site</li></Link>
                        
                        
                
            </ul>
        </nav>
    );
};

export default DashBoardNavBarMenu;