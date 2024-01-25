import { Link } from "react-router-dom"
// import "./LegalMention.scss"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const PartnerBox = () => {
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
        <section className="col-4 partner m-auto d-flex justify-content-around flex-column text-center">
            <h4 className="partner-title partner  h2">Partenaires</h4>
            <div className=" col-6 partner partner-caroussel w-50 m-auto text-center">
            <div className="carousel carousel-dark slide Contact-box card-body h-75" id="footerPartnerIndicators">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#footerPartnerIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                    </button>
                    <button type="button" data-bs-target="#footerPartnerIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                    </button>
                    <button type="button" data-bs-target="#footerPartnerIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                    </button>
                </div>
                <div className="carousel-inner w-100 col-12">
                    <div className="carousel-item active">
                        <img src="http://www.theatrenonchaloir.fr/images/partenaires/4saisons.png" 
                        className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item ">
                        <img src="http://www.theatrenonchaloir.fr/images/partenaires/gironde.jpg" 
                        className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item ">
                        <img src="http://www.theatrenonchaloir.fr/images/partenaires/gradignan.jpg" 
                        className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#footerPartnerIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#footerPartnerIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div></section>
    );
};

export default PartnerBox;