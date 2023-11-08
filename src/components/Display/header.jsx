import { Button } from "bootstrap"

const Header = () => {

    const login ={
        role:"user",
        isLogin:true
    }

    return(
        <header className="App-header">
            <nav className="Header-nav nav">
                <ul className="App-nav nav-menu">
                    <li className="nav-item App-link"><a className="App-link" href="#home">Théâtre du nonchaloir</a></li>
                    <li className="nav-item App-link"><a className="App-link" href="#event">Nos spectacles / Nos Évènenements</a></li>
                    <li className="nav-item App-link"><a className="App-link" href="#teams">Notre troupes</a></li>
                    <li className="nav-item App-link"><a className="App-link" href="#projects">Nos réalisations</a></li>
                    {login.isLogin? (
                        <>
                            {login.role==="admin" && ( 
                                <li className="nav-item App-link"><a className="App-link" href="#dashboard">Dashboard</a></li>
                            )}
                            <li className="nav-item App-link"><a className="App-link" href="#connect">Connexion</a></li>
                        </>
                    ): <li className="nav-item App-link"><a className="App-link" href="#connect">Connexion</a></li>}
                </ul>
            </nav>
        </header>
    )
};

export default Header;