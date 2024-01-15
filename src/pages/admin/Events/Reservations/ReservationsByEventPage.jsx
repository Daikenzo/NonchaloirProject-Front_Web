import BtnBoxNav from "../../../../components/admin/Btn/BtnBoxNav";
import HeaderDisplay from "../../../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../../../components/admin/Footer/FooterDisplayAdmin";
import { Link, useParams } from "react-router-dom";

const ReservationListByEventPage = ({}) => {
    // Init
    const {id} = useParams();
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Spectacles & Evenement / Id: 1 / Réservations</h2>
                </section>
                <section className="container eventlist-section">
                    <BtnBoxNav  type={"reservation"} itemData={"events"} onlyCreate={true}/>
                    <div className="event-content card">
                        <div className="card-header bg-danger">
                            <h4 className="event-name text-white">Nom de l'évènement (id: 1)- Liste des Réservations</h4>
                        </div>
                        <BtnBoxNav  type={"events"} itemData={"events"} disableDelete={true}/>
                        <div className="contact-info">
                            <ul className="contact-info m-2">
                                <li className="text-group">
                                    <span className="p-2 list-title">Numero du ticket</span>
                                    <span className="p-2">2020350</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Label</span>
                                    <span className="p-2">Place N°1</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date d'achat</span>
                                    <span className="p-2">15/01/2023</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Acheteur du ticket:</span>
                                    <ul className="text-group">
                                        <li>
                                            <span className="p-2 list-title">Nom:</span>
                                            <span className="p-2 list-title">Defes</span>
                                        </li>
                                        <li>
                                            <span className="p-2 list-title">Prénom:</span>
                                            <span className="p-2 list-title">Paulo</span>
                                        </li>
                                    </ul>
                                    <span className="p-2">Paulo</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Etat du paiement:</span>
                                    <span className="p-2">Validé</span>
                                </li>                                
                            </ul>
                        </div>
                    </div>

                    <div className="event-content card">
                        <div className="card-header bg-danger">
                            <h4 className="event-name text-white">Nom de l'évènement (id: 1)- Liste des Réservations</h4>
                        </div>
                        <BtnBoxNav  type={"events"} itemData={"events"}/>
                        <div className="contact-info">
                            <ul className="contact-info m-2">
                                <li className="text-group">
                                    <span className="p-2 list-title">Numero du ticket</span>
                                    <span className="p-2">2020350</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Label</span>
                                    <span className="p-2">Place N°1</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date d'achat</span>
                                    <span className="p-2">15/01/2023</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Acheteur du ticket:</span>
                                    <ul className="text-group">
                                        <li>
                                            <span className="p-2 list-title">Nom:</span>
                                            <span className="p-2 list-title">Defes</span>
                                        </li>
                                        <li>
                                            <span className="p-2 list-title">Prénom:</span>
                                            <span className="p-2 list-title">Paulo</span>
                                        </li>
                                    </ul>
                                    <span className="p-2">Paulo</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Etat du paiement:</span>
                                    <span className="p-2">Non validé</span>
                                </li>                                
                            </ul>
                        </div>
                    </div>
    
                </section>

            </main>
            <FooterDisplay />
        </>
    );
};

export default ReservationListByEventPage;