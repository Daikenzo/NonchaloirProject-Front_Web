import { Link, useParams } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay"
import NavBarMenu from "../../public/NavBar/NavBarMenu"
import { UserDefault, userIsloggin, users } from "../../../debug/sampleBd/users";
import { useState } from "react";
import DashBoardNavBarMenu from "../../admin/Navbar/DashboardNavBarMenu";

const HeaderDisplay = ({dashboard}) => {
    // console.log(users[UserDefault])
    

    const userData = UserDefault? {
        id:users[UserDefault].id,
        name:users[UserDefault].name,
        role:users[UserDefault].role,
        isLogin:true
    } :
    {
        id:users[0].id,
        name:users[0].name,
        role:users[0].role,
        isLogin:false
    }
    console.log(userData)


    return(
        <>
            {!dashboard ? (
            <header className="App App-header">
                <NavBarMenu login={userData}/>
            </header>) : (
                <header className="App App-header dashboard">
                <DashBoardNavBarMenu login={userData}/>
                </header>
            )}
        </>
        
    )
};

export default HeaderDisplay;