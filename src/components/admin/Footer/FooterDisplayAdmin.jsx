import { Link } from "react-router-dom"
import "../../public/Footer/Footer.scss"
import '../Navbar/Dashboard.scss'

const FooterDisplayAdmin = () => {
    // Display
    return (
        <footer className=" App-footer dashboard footer-content footer-container color-white main-container" >
            <nav className="row footer-nav" >
                <div className="col-4 contacts">
                </div>
                <div className="col-4 contacts text-center"></div>
                <div className="col-4 contacts text-center"></div>
            </nav>
        </footer>
    );
};

export default FooterDisplayAdmin;