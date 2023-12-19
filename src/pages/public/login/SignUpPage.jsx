// Import
import './login.scss';
import HeaderDisplay from '../../../components/common/Header/HeaderDisplay';
import { users, UserDefault } from '../../../debug/sampleBd/users';
import {API} from '../../../configs/API_config';
import FooterDisplay from '../../../components/public/Footer/FooterDisplay';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    // Init
    const navigate = useNavigate();
    // Set Default State
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Les informations sont incorrectes")
    
    // const loginCreateResponse = await fetch(`https:/${API.defaultpath}/login`)
    console.log("jesuis dans le login page")
    Cookies.remove("jwt");

    const handleLoginSubmit = async (event) =>{
        // disable Default Reload
        event.preventDefault();
        // Get Signup Info
        const email = event.target.usermail.value; // Identifiant used: email
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;
        const username = event.target.username.value? event.target.username.value : event.target.usermail.value;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const adress = {
            "number": event.target.adress.number.value,
            "street": event.target.adress.street.value,
            "postcode": parseInt(event.target.adress.postcode.value),
            "city": event.target.adress.city.value
        }
        const phone = event.target.phone.value;


        // Verification Empty form - return error if empty
        if (email === '' || password === '' || firstname) {
            setErrorMessage("Les champs ne peux pas être vide")
            return setLoginError(true)
        } else {
            setErrorMessage("Mot de passe ou identifiant incorrect")
            setLoginError(false)
        }
        // verification Info
        if (password !== passwordConfirm) {
            setErrorMessage("les mot de passes ne sont pas identique");
            return setLoginError(true);
        }


        const loginResponse = await fetch(`http://${API.defaultpath}/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ email, password, username, firstname, lastname, adress, phone}),
          });
          if(!loginResponse.ok && loginResponse.status >= 500){
            console.log("erreur serveur")
            navigate("/")
        }
          // si la réponse est valide
          if (loginResponse.status === 200) {
            const Data = await loginResponse.json();

            navigate("/login");
          } else {

            setLoginError(true)
          }
        };
    // If Enter into Login Page with jwt remove this
    useEffect(() => {
        const jwt = Cookies.get("jwt") || null;
        if (jwt) {
        }
      }, []);

    // display
    return (
        <>
            <HeaderDisplay/>
            <main onSubmit={handleLoginSubmit} className='App-main main-container d-flex justify-content-between align-content-center col-4 login'>
                <div className=" container-fluid">
                    <div className="card">
                        <div className="flex-row justify-content-center card-header card-title">
                            <h3 className="m-auto"><Link to="/login" className="App-link link-dark">Connexion</Link></h3>
                            <h3 className=" m-auto"><div className="App-Link fw-bold">Incription</div></h3>
                        </div>
                        
                        <form  className="card card-body ContactForm App-form p-2">

                            <div className="form-item input-group form-control">
                                <label htmlFor="usermail" className="input-group-text">Email</label>
                                <input name="usermail" type="text" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="password" className="input-group-text">Mot de passe</label>
                                <input name="password" type="password" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="firstname" className="input-group-text">Nom</label>
                                <input name="firstname" type="firstname" className="input-group-text flex-fill"/>
                            </div>
                            <input className="form-item App-btn btn btn-dark" alt="send" type="submit"/>
                        </form>
                    </div>
                    {loginError && (
                        <div className="error container text-bg-danger text-center">{errorMessage}</div>
                    )}
                </div>
            </main>
            <FooterDisplay />
        </>
    );
};

export default SignUpPage;