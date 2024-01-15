import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../../components/admin/Footer/FooterDisplayAdmin";
import BtnBoxNav from "../../../components/admin/Btn/BtnBoxNav";

const DashboardUsersPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Utilisateurs</h2>
                </section>
                <section className="container eventlist-section">
                    <h3 className="">Listes des Utilisateurs</h3>
                    <BtnBoxNav  type={"CreateUser"} itemData={"users"} onlyCreate={true}/>
                    <div className="event-content card">
                    <div className="card-header text-white bg-danger">
                            <h4 className="event-name">Utilisateur n°<span>1</span></h4>
                        </div>
                        <BtnBoxNav type={"users"} itemData={"users"}/>
                        <div className="event-info">
                            <ul className="event-info m-2">
                                <li className="text-group">
                                    <span className="p-2 list-title">Prénom:</span>
                                    <span className="p-2">Paulo</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Nom:</span>
                                    <span className="p-2">Defes</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Rôle/Adhésion:</span>
                                    <span className="p-2">Non Adhérent</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Adresse mail:</span>
                                    <span className="p-2">paul.defes@emeil.com</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Adresse:</span>
                                    <div className="p-2 list-element-item-none">
                                        <ul className="text-group adress">
                                            <li className="adress-name">Nom du local</li>
                                            <li><span>3</span> <span>Rue de la Palustrade</span></li>
                                            <li>Batiment D, Porte 2</li>
                                            <li><span>33000</span> <span>Bordeaux</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Téléphone:</span>
                                    <span className="p-2">06 42 93 56 09</span>
                                </li>
                                
                                <li className="text-group">
                                    <span className="p-2 list-title">Date d'aniversaire':</span>
                                    <span className="p-2">10 Octobre 2024</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date d'inscription:</span>
                                    <span className="p-2">10 Mai 2023</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="user-avatar">
                            <p>Photo de profil</p>
                            <img src="#" alt="user-profile-picture" />
                        </div>
                    </div>
    
                </section>

            </main>
            <FooterDisplay />
        </>
    );
};

export default DashboardUsersPage;