import React from "react";
;

// import
const version = {
  react:React.version,
  project:'1.0.0'
}

const HeaderDisplayDebug = ({logo}) => {

    return (
        <header className="App App-header App-debug">
            <img src={logo} className="App-logo debug" alt="logo" />
            <div className="d-flex flex-column justify-content-center w-100">
              <h1>Le site du Nonchaloir</h1>
              <div className="card-group flex-wrap m-2 text-center text-dark-emphasis" id="project Info">
                <p className="m-auto">React <code>V{version.react}</code></p>/
                <p className="m-auto">2023</p>/
                <p className="m-auto">Version <code>V{version.project}</code></p>
              </div>
            </div>
            <p className="">Modifiez <code>src/App.js</code> et sauvegarder pour recharger.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
        </header>
    );
};

export default HeaderDisplayDebug;