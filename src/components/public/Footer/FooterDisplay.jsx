import { Link } from "react-router-dom"
import "./Footer.scss"

const FooterDisplay = () => {
    // Display
    return (
        <footer className=" App-footer footer-content footer-container color-white main-container" >
            <nav className="row footer-nav" >
                <div className="col-4 contacts">
                    <h4 className="contact-title">Théâtre du Nonchaloir</h4>
                    <div className="adress">
                        <p className="adress-name">Chateau Ornon, salle n°3</p>
                        <p className="adress-libelle">16 Impasse D'ornon</p>
                        <p className="adress-city">33170 Gradignan</p>
                    </div>
                    <div className="contact-mail">
                    contact@nonchaloir.com
                    </div>
                    <Link to={"/contact"} className="contact-form-link">Formulaire de Contact</Link>
                </div>
                <div className="col-4 contacts text-center">test<p>o</p></div>
                <div className="col-4 contacts text-center">test</div>
            </nav>
        </footer>
    );
};

export default FooterDisplay;