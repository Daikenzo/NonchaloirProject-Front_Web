import { Link, useParams } from "react-router-dom";
import LogoDisplay from "../../common/img/LogoDisplay"
import NavBarMenu from "../../public/NavBar/NavBarMenu"
import { userIsloggin } from "../../../debug/sampleBd/users";

const HeaderDisplay = ({user}) => {

    let {userId} = useParams();
    

    const userlogin ={
        id:user.id,
        name:user.name,
        role:user.role,
        isLogin: userIsloggin(user)
    }


    return(
        <header className="App App-header">
            <NavBarMenu login={userlogin}/>
        </header>
    )
};

export default HeaderDisplay;