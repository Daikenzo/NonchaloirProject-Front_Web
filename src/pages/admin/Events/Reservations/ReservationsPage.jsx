import BtnBoxNav from "../../../../components/admin/Btn/BtnBoxNav";
import HeaderDisplay from "../../../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../../../components/admin/Footer/FooterDisplayAdmin";
import { Link, useParams } from "react-router-dom";

const ReservationListPage = () => {
    // Init
    const {id} = useParams();
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Réservations</h2>
                </section>
                <section className="container eventlist-section">
                    <div className="event-content card">
                        <div className="card-header bg-danger">
                            <h4 className="event-name text-white">Liste des Réservations de L'évènement N°<span>1</span></h4>
                        </div>
                            <BtnBoxNav  type={"reservation"} itemData={"events"} onlyCreate={true}/>
                        <div className="container col-11 card">
                            <div className="card-header bg-danger">
                                <h4 className="text-white">Réservation N°<span>1</span></h4>
                            </div>
                            <BtnBoxNav  type={"events"} itemData={"events"} disableDelete={true}/>
                            <div className="card-body">
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
                                            <span className="p-2">Payé</span>
                                        </li>                                
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="container col-11 card">
                            <div className="card-header bg-danger">
                                <h4 className="text-white">Réservation N°<span>2</span></h4>
                            </div>
                            <BtnBoxNav  type={"reservation"} itemData={"events"} onlyDelete={true}/>
                            <div className="card-body">
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
                                            <span className="p-2">En cours de paiement</span>
                                        </li>                                
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                        
                    </div>
    
                </section>

            </main>
            <FooterDisplay />
        </>
    );
};

export default ReservationListPage;