import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../../components/admin/Footer/FooterDisplayAdmin";
import BtnBoxNav from "../../../components/admin/Btn/BtnBoxNav";
import { Link } from "react-router-dom";

const DashboardEventsPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Spectacles & Evenement</h2>
                </section>
                <section className="container eventlist-section">
                    <h3>Listes des évènements</h3>
                    <BtnBoxNav  type={"events"} itemData={"events"} CreateFetchData="/dashboard/events/create" onlyCreate={true}/>
                    <div className="event-content card">
                        <div className="card-header bg-danger">
                            <h4 className="event-name text-white">Nom de l'évènement</h4>
                        </div>
                        <BtnBoxNav  type={"events"} itemData={"events"}/>
                        <Link to="/dashboard/events/1/reservations" className="App-link link-dark m-auto">Listes des réservations</Link>
                        <div className="event-info">
                            <ul className="event-info m-2">
                                <li className="text-group">
                                    <span className="p-2 list-title">Nom:</span>
                                    <span className="p-2">evenement 1</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Type:</span>
                                    <span className="p-2">Spectacle</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Lieu de l'évènement:</span>
                                    <div className="p-2 list-element-item-none">
                                        <ul className="text-group adress">
                                            <li>Nom du local</li>
                                            <li><span>3</span> <span>Rue de la Palustrade</span></li>
                                            <li>Batiment D, Porte 2</li>
                                            <li><span>33000</span> <span>Bordeaux</span></li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li className="text-group">
                                    <span className="p-2 list-title">Nom de l'organistateur:</span>
                                    <div className="p-2 list-element-item-none">
                                        <ul className="text-group">
                                            <li><span>Nom</span>: <span>Antoine Dujardin</span></li>
                                            <li><span>Telephone</span>: <span>Antoine Dujardin</span></li>
                                            <li><span>Email</span>: <span>Antoine Dujardin</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date de l'évènement:</span>
                                    <span className="p-2">10 Octobre 2024</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Heure d'ouverture':</span>
                                    <span className="p-2">19h30</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Description:</span>
                                    <p className="p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora   ipsa unde sunt vero quod cupiditate, placeat minus dolor et a tempore,    dolore harum, excepturi porro delectus expedita totam illum.
                                        Labore corrupti ipsam nobis cupiditate sint amet pariatur, enim incidunt    quasi nihil odit maxime quidem, deserunt possimus officiis itaque? Dolore  quia dignissimos accusamus, ex atque nemo reprehenderit tempora eligendi     at.
                                    </p>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date de création:</span>
                                    <span className="p-2">10 Mai 2023</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Crée par:</span>
                                    <span className="p-2">Jeremy belpoid</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Mise en scène par:</span>
                                    <span className="p-2">Odd delarovia</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Distribution des rôles:</span>
                                    <div className="p-2 list-element-item-none">
                                        <BtnBoxNav  type={"ActRole"} itemData={"ActRole1"} onlyCreate={true}/>
                                        <ul className="text-group ActRoles">
                                            <li itemID="ActRole1" className="text-group">
                                                <div className="p-2 list-title">Role N°1:</div>
                                                <BtnBoxNav  type={"ActRole-Item"} itemData={"ActRole1-role1"}/>
                                                <ul className="text-group">
                                                    <li><span>Madame mangin</span>: <span>William nat</span></li>
                                                    <li><span>Sisi</span>: <span>Odd Delarovia</span></li>
                                                </ul>
                                            </li>
                                            <li itemID="ActRole2" className="text-group">
                                                <div className="p-2 list-title">Role N°2:</div>
                                                <BtnBoxNav  type={"ActRole-Item"} itemData={"ActRole1-role2"}/>
                                                <ul className="text-group">
                                                    <li><span>Madame mangin</span>: <span>William nat</span></li>
                                                    <li><span>Sisi</span>: <span>Odd Delarovia</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-group" itemID="ActRole-1">
                                    
                                    <span className="p-2 list-title">Distribution des rôles:</span>
                                    <div className="p-2 list-element-item-none">
                                        <ul className="text-group">
                                            <li><span>Madame mangin</span>: <span>William nat</span></li>
                                            <li><span>Sisi</span>: <span>Odd Delarovia</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Nombre de place</span>
                                    <ul className="text-group">
                                            <li><span>Max</span>: <span>100</span></li>
                                            <li><span>Disponible</span>: <span>20</span></li>
                                        </ul>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Prix d'entrée:</span>
                                    <div className="p-2 list-element-item-none">
                                        <ul className="text-group">
                                            <li><span>Normal</span>: <span>8</span>€</li>
                                            <li><span>Adhérent</span>: <span>0</span>€</li>
                                            <li><span>Etudiant</span>: <span>0</span>€</li>
                                        </ul>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="event-flyer">
                            <p>Image (Flyer)</p>
                            <img src="#" alt="flyer-1" />
                        </div>
                    </div>
    
                </section>

            </main>
            <FooterDisplay />
        </>
    );
};

export default DashboardEventsPage;