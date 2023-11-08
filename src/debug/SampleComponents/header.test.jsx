const Header = ({logo}) => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="">
              Modifiez <code>src/App.js</code> et sauvegarder pour recharger.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
        </header>
    );
};

export default Header;