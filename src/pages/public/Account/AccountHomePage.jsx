import { Link, useNavigate, useParams } from "react-router-dom";
import {GetUserInfo, UserDefault, users} from "../../../debug/sampleBd/users";
import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"

const AccountHomePage = () => {
    // Init Info
    const {id} = useParams();

    const userInfo = GetUserInfo(id);
    // console.log(userInfo.name)
    const EmptyMessage = "Non renseigné"
    
    // display
    return (

        <>
            <HeaderDisplay user={users[GetUserInfo(UserDefault).id-1]}/>
            <main className="App-main main-container" >
                <div className="user container">
                    <h2 className="PageTitle h2 display-1" id="title">Page de {userInfo.name} </h2>
                    <div className="user-info App-card container card w-75">
                        <h3 className="card-title">Info Utilisateur</h3>
                        <ul className=" cardlist-group">
                            <li className="card-info  card-group list-group-item"><span className="fw-bolder">Nom</span>: <span className="">{userInfo.name}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Rôle</span>: <span className=" text-info">{userInfo.role}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Téléphone</span>: <span className="">{userInfo.phone? userInfo.phone : EmptyMessage}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Adresse Mail</span>: <span className="">{userInfo.email? userInfo.email : EmptyMessage}</span></li>
                            <li className="card-info list-group-item"><span className="fw-bolder">Anniversaire</span>: <span className="">{userInfo.birthday? userInfo.birthday : EmptyMessage}</span></li>
                        </ul>
                    </div>
                </div>
                {(UserDefault == id) && <div className="disconnect container">
                    <Link to="/" alt="Se déconnecté" className="App-link">Se déconnecter</Link>
                </div>}
            </main>
        </>
    )
};

export default AccountHomePage;