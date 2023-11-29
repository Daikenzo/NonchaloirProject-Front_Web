import React from "react";
import logo from "../../img/ico/logo.svg"

import HeaderDisplayDebug from "../SampleComponents/header.test";
import "./debug.scss"

const DebugHome = (() => {


    return (
        <div className="App-debug App-header w-100 h-100" id="debug">
            <HeaderDisplayDebug logo={logo}/>
        </div>
    )
})

export default DebugHome;