
import BtnBoxNav from "../../../components/admin/Btn/BtnBoxNav";
import HeaderDisplay from "../../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../../components/admin/Footer/FooterDisplayAdmin";
import { Link } from "react-router-dom";

const AdminContactsMessagePage = () => {
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / messages</h2>
                </section>
                <section className="container contactlist-section">
                    <h3 className="">Listes des messages</h3>
                    <div className="contact-content card"   >
                    <div className="card-header text-white bg-danger">
                            <h4 className="contact-name">Ticket n°<span>1</span></h4>
                        </div>
                        <BtnBoxNav type={"contacts"} itemData={"contacts"}/>
                        <div className="contact-info">
                            <ul className="contact-info m-2">
                                <li className="text-group">
                                    <span className="p-2 list-title">Numero du ticket</span>
                                    <span className="p-2">2020350</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Date D'envoi</span>
                                    <span className="p-2">15/01/2023</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Prénom:</span>
                                    <span className="p-2">Paulo</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Nom:</span>
                                    <span className="p-2">Defes</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Adresse mail:</span>
                                    <span className="p-2">paul.defes@emeil.com</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Téléphone:</span>
                                    <span className="p-2">06 42 93 56 09</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Adresse:</span>
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
                                    <span className="p-2 list-title">Type de demande:</span>
                                    <span className="p-2">demande</span>
                                </li>
                                <li className="text-group">
                                    <span className="p-2 list-title">Message: </span>
                                    <p className="p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis tenetur non excepturi harum. Non laudantium provident cum reiciendis explicabo quos perspiciatis obcaecati inventore nisi aliquam suscipit, pariatur hic labore!
                                        Repellendus sed necessitatibus eveniet aspernatur quibusdam sequi illum, porro perspiciatis laborum rerum laudantium odit sapiente ad. Similique, earum! Commodi, fugit illo! Molestias veniam vel minus debitis a ratione exercitationem laborum!
                                        Aliquid quos consequatur veritatis, facere ea alias qui, dolore officia doloremque nesciunt numquam praesentium consequuntur cumque repellat quisquam optio voluptatum? Ullam perferendis repudiandae expedita adipisci velit dolorem in dolorum sequi.                                    
                                    </p>
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

export default AdminContactsMessagePage;