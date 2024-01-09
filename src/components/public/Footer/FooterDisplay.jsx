import { Link } from "react-router-dom"
import "./Footer.scss"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import LegalMentionDisplay from "../LegalMention/LegalMention";
import ContactBox from "../Contact/ContactBox";
import PartnerBox from "../Partner/PartnerBox";

const FooterDisplay = () => {
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
        <footer className=" App-footer footer-content footer-container color-white main-container" >
            <nav className="row footer-nav" >
                <ContactBox />
                <LegalMentionDisplay />
                <PartnerBox />
            </nav>
        </footer>
    );
};

export default FooterDisplay;