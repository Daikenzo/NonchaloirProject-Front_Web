const Header = () => {

    return(
        <header className="App-header">
            <nav className="Header-nav nav">
                <ul className="App-nav nav-menu">
                    <li className="nav-item"><a className="App-link" href="#home">Théâtre du nonchaloir</a></li>
                    <li className="nav-item"><a className="App-link" href="#event">Nos spectacles / Nos Évènenements</a></li>
                    <li className="nav-item"><a className="App-link" href="#teams">Notre troupes</a></li>
                    <li className="nav-item"><a className="App-link" href="#projects">Nos réalisations</a></li>
                    <li className="nav-item"><a className="App-link" href="#dashboard">Dashboard</a></li>
                    <li className="nav-item"><a className="App-link" href="#connect">connexion</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;