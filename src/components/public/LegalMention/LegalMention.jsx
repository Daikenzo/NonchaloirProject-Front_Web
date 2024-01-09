import { Link } from "react-router-dom"
// import "./LegalMention.scss"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const LegalMentionDisplay = () => {
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
        <section className="col-4 legalBox text-center flex-column m-auto">
            <div className="legalBox-info">
                <p>
                Les informations recueillies à partir de ce site font l'objet d'un traitement informatique destiné au Théâtre du Nonchaloir pour la gestion et information de ses adhérents et du public en général.
                </p>
                <p>
                Conformément à la loi "Informatique et libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès et de rectification aux informations vous concernant en vous adressant à theatre.
                </p>
            </div>
            <div className="legalBox-info license-Info">
                <span className=" fw-semibold fst-italic w-50 m-2">
                    Licences
                </span>:
                <span className=" fw-semibold fst-italic w-50 m-2" id="licence">
                        L-R-20-002969 / L-R-20-002971
                </span>
            </div>
            
        </section>
    );
};

export default LegalMentionDisplay;