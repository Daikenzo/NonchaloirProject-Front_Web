import React from "react";
import users from '../../debug/sampleBd/users'

import HeaderDisplay from "../../components/common/Header/HeaderDisplay";

const Home = (({logo}) => {

   console.log(users[1])

    return (

        <>
            <HeaderDisplay logo={logo} user={users[1]}/>
            <main className="App App-main main-container">
                <div className="container-fluid">
                test
                </div>
            </main>
        </>
    )
})

export default Home;