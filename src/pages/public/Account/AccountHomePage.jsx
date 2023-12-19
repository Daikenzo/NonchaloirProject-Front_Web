import { Link, useNavigate, useParams } from "react-router-dom";
import {GetUserInfo, UserDefault, users} from "../../../debug/sampleBd/users";
import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"
import { useEffect, useState } from "react";
import {API} from "../../../configs/API_config";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import './AccountHome.scss';
import setPhone from "../../../components/common/phone/PhoneFormater";

const AccountHomePage = () => {
    // Init
    const {id} = useParams();
    const EmptyMessage = "Non renseigné"
    const [userInfo, setUserInfo] = useState([]);
    const [userName, setUserName] = useState([""])
    const [userPhone, setUserPhone] = useState("")
    const [roleColor, setRoleColor] = useState("role-info color-normal")
    const navigate = useNavigate();
    
    // Disconect
    const handleLogout = () => {
        Cookies.remove("jwt")
    };
    const jwt = Cookies.get("jwt"); //localstorage.getItem("jwt");
    const ActualUserId = jwt? (jwtDecode(jwt).data.id) :  (null);

    const setUsername = (data =>{
        const username = (data.email !== data.username)? data.username : (`${data.firstname} ${data.lastname}`)
        setUserName(username);
    });

    const fetchUser = async () => {
        const path= `http://${API.defaultpath}/users`;
        const response = await fetch(`${path}/${id}`, {
          method: "GET",
        });
        // If undefined user, return 404 error
         if (!response.ok) {
            return navigate(`404`);
        }
        const responseJs = await response.json();
        console.log(responseJs.data)
        
        // set 
        if (userInfo.email) setUsername(responseJs.data);
        // Set Role Status color
        let roleRange = responseJs.data.RoleId
        if(roleRange <= 1) setRoleColor("role-info color-normal")
        if(roleRange > 1 && roleRange <= 3) setRoleColor("role-info color-adherent")
        if(roleRange > 3) setRoleColor("role-info color-admin")
        // format phone with space
        responseJs.data.phone = setPhone(responseJs.data.phone);
        setUserPhone(responseJs.data.phone);
        // Set final User Info
        setUserInfo(responseJs.data);
    };

    
    useEffect(() => {
        fetchUser();
      }, [id]);

    
    
    // display
    return (

        <>
            <HeaderDisplay />
            <main className="App-main main-container" >
                <div className="user container">
                    {userInfo.email && <>
                        <h2 className="PageTitle h2 display-1" id="title">Page de <span>{userInfo.firstname} {userInfo.lastname}</span></h2>
                    <div className="user-info App-card container card w-75">
                        <h3 className="card-title">Info Utilisateur</h3>
                        <ul className=" cardlist-group">
                            <li className="card-info  card-group list-group-item"><span className="fw-bolder">Nom</span>: <span className="">{userInfo.firstname} {userInfo.lastname}</span></li>
                            {(userInfo.username && userInfo.username !== userInfo.email)?(
                            <li className="card-info  card-group list-group-item">
                                <span className="fw-bolder">Username</span>: <span className="">{userInfo.username}</span>
                                <a href="#edit" alt="usernameDefine" className="App-link link-info p-3">Modifier</a>
                            </li>) : (<li className="card-info  card-group list-group-item">
                                <span className="fw-bolder">Username</span>: <span className="">{EmptyMessage}</span>
                                <a href="#edit" alt="usernameDefine" className="App-link link-info p-3">Définir</a>
                            </li>)
                            }
                            
                            <li className="card-info list-group-item"><span className="fw-bolder">Rôle</span>: 
                                <span className={roleColor}>{userInfo.Role.label}</span>
                            </li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Téléphone</span>: <span className="">{userInfo.phone? userInfo.phone: EmptyMessage}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Adresse Mail</span>: <span className="">{userInfo.email? userInfo.email : EmptyMessage}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Anniversaire</span>: <span className="">{userInfo.birthday? userInfo.birthday : EmptyMessage}</span></li>
                        </ul>
                        {(ActualUserId === parseInt(id)) && <div className="disconnect container">
                            <p><a href={"/"} onClick={handleLogout} alt="Se déconnecter" className="App-link link-danger">Se déconnecter</a></p>
                        </div>}
                    </div>
                    </> 
                    }
                    
                </div>
                
            </main>
        </>
    )
};

export default AccountHomePage;