import { Link } from "react-router-dom";

const HeaderDisplay = ({user, logo}) => {

    const login ={
        role:user.role,
        isLogin: true
    }
    console.log(login)

    return(
        <header className="App App-header">
            <nav className="Header-nav nav">
                <ul className="App-nav nav-menu">
                    <Link className="nav-item App-link" to={"/"}><li className="nav-item" id="title">Théâtre du Nonchaloir
                    <img src={logo} className="nav-item App-logo" alt="logo" /></li></Link>
                    <Link className="nav-item App-link" to={"/events"}><li className="nav-item"><div><p>Spectacles / </p><p> Évènenements</p></div></li></Link>
                   <Link className="nav-item App-link" to={"/teams"}><li className="nav-item">Notre troupes</li></Link>
                   <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos réalisations</li></Link>
                   {/* <Link className="nav-item App-link" to={"/projects"}><li className="nav-item">Nos Ateliers</li></Link> */}
                    
                    {login.isLogin? (
                        <>
                            {login.role==="admin" && ( 
                                <Link className="nav-item nav-right App-link" to={"/dashboard"}><li className="nav-item">Dashboard</li></Link>
                            )}
                            <Link className="nav-item nav-right App-link" to={"/contact"}><li className="nav-item">Espace Client</li></Link>
                        </>
                    ): <Link className="nav-item nav-right App-link" to={"/login"}><li className="nav-item">Connexion</li></Link>}
                </ul>
            </nav>
        </header>
    )
};

export default HeaderDisplay;