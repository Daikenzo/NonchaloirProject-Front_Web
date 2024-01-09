import { Link } from "react-router-dom"
// import "./LegalMention.scss"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ContactBox = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        
        const jwt = Cookies.get("jwt") || null;
        if (jwt) {
            const user = jwtDecode(jwt);
            if (user.data.role === 5) {
                setIsAdmin(true)
              }else{
                setIsAdmin(false)
              }
        }
      }, []);
    // Display
    return (
        <section className="col-4 contacts m-auto">
            <h4 className="contact-title">Théâtre du Nonchaloir</h4>
            <div className="adress">
                <p className="adress-name">Chateau Ornon, salle n°3</p>
                <p className="adress-libelle">16 Impasse D'ornon</p>
                <p className="adress-city">33170 Gradignan</p>
            </div>
            <div className="contact-mail">
                <a href="mailto:contact@nonchaloir.com" className="legalBox contact-mail App-link">
                    contact@nonchaloir.com
                </a>
            </div>
            {!isAdmin && (
                <Link to={"/contact"} className="App-link link-info contact-form-link">Formulaire de Contact</Link>
            )}
        </section>
    );
};

export default ContactBox;