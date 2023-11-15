const HeaderDisplayDebug = ({logo}) => {

    return (
        <header className="App App-header App-debug">
            <img src={logo} className="App-logo debug" alt="logo" />
            <p className="">
              Modifiez <code>src/App.js</code> et sauvegarder pour recharger.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
        </header>
    );
};

export default HeaderDisplayDebug;