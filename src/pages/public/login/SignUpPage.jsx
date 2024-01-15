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
    const [LoginSuccess, setSucessState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Les informations sont incorrectes")
    
    // const loginCreateResponse = await fetch(`https:/${API.defaultpath}/login`)
    console.log("Sign In Page")
    Cookies.remove("jwt");

    const handleLoginSubmit = async (event) =>{
        // disable Default Reload
        event.preventDefault();
        // Get Signup Info
        const email = event.target.email.value; // Identifiant used: email
        const password = event.target.password.value;
        const passwordConfirm = event.target.passwordConfirm.value;
        const username = (event.target.username.value || event.target.username.value !== "")? event.target.username.value : event.target.email.value;
        
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const birthday = event.target.birthday.value
        const adress = {
            "number": parseInt(event.target.adressNumber.value),
            "street": event.target.street.value,
            "postcode": parseInt(event.target.postcode.value),
            "city": event.target.city.value
        }
        
        const phone = event.target.phone.value || null;
        console.log(password)
        // Verification Empty form - return error if empty
        if (email === '' || password === '' || firstname === '') {
            setErrorMessage("Les champs ne peux pas être vide")
            console.log(email, password, firstname)
            return setLoginError(true)
        }
        // Check verification Info
            // password reconfirm
        if (password !== passwordConfirm) {
            setErrorMessage("les mot de passes ne sont pas identique");
            return setLoginError(true);
        }
        // Invalid Value
        if((username.split(' ').join('') !== username)
            || (firstname.split(' ').join('') !== firstname)
            || (lastname.split(' ').join('') !== lastname)
        ){
            setErrorMessage("Saisie Incorecte")
            return setLoginError(true)
        }

        // If not error, disable message error
        setLoginError(false) 
        const SignInResponse = await fetch(`http://${API.defaultpath}/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ email, password, firstname, username, lastname, adress, phone, birthday}),
          });
          if(!SignInResponse.ok && SignInResponse.status >= 500){
            console.log("erreur serveur")
            navigate("/")
        }
          // si la réponse est valide
          if (SignInResponse.status === 201 || SignInResponse.status === 200) {
            setErrorMessage("L'utilisateur a été crée")
            setSucessState(true)
            setTimeout(() => {
                navigate("/login");
              }, "1000")
            
          } else {
            setErrorMessage("L'utilisateur existe déjà")
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
                    <div className="card container">
                        <div className="flex-row justify-content-center card-header card-title">
                            <h3 className="m-auto"><Link to="/login" className="App-link link-dark">Connexion</Link></h3>
                            <h3 className=" m-auto"><div className="App-Link fw-bold">Incription</div></h3>
                        </div>
                        
                        <form  className="card card-body ContactForm App-form p-2">

                            <div className="form-item input-group form-control">
                                <label htmlFor="email" className="input-group-text">Email</label>
                                <input name="email" id="email" type="text" className="input-group-text flex-fill" required/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="password" className="input-group-text">Mot de passe</label>
                                <input name="password" id="password" type="password" className="input-group-text flex-fill" required/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="passwordConfirm" className="input-group-text">Confirmer Mot de passe</label>
                                <input name="passwordConfirm" id="passwordConfirm" type="password" className="input-group-text flex-fill" required/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="birthday" className="input-group-text">Date de naissance</label>
                                <input name="birthday" id="birthay" type="date" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="firstname" className="input-group-text">Prénom</label>
                                <input name="firstname" id="firstname" type="text" className="input-group-text flex-fill" required/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="lastname" className="input-group-text">Nom</label>
                                <input name="lastname" id="lastname" type="text" className="input-group-text flex-fill" required/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="username" className="input-group-text">Pseudonyme</label>
                                <input name="username" id="username" type="text" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group form-control adressForm">
                                <label htmlFor="adress" className="input-group-text">Adresse</label>
                                <div name="adress" className="form-item item-group input-group form-control">
                                    <div className="form-item item-group input-group flex-fill">
                                        <label htmlFor="adressNumber" className="input-group-text col-6 col-md-auto">Numéro</label>
                                        <input name="adressNumber" id="adressNumber" type="number" className="input-group-text flex-fill"/>
                                        <label htmlFor="street" className="input-group-text col-6 col-md-auto">Libellé de la rue</label>
                                        <input name="street" id="street" type="text" className="input-group-text flex-fill" required/>
                                    </div>
                                    
                                    <div className="form-item item-group input-group form-control flex-fill">
                                        <label htmlFor="postcode" className="input-group-text">PostCode</label>
                                        <input name="postcode" id="postcode" type="number" className="input-group-text flex-fill" required/>
                                        <label htmlFor="city" className="input-group-text">Ville</label>
                                        <input name="city" id="city" type="text" className="input-group-text flex-fill" required/>
                                    </div>
                                </div>
                                <div className="form-item item-group input-group form-control">
                                    <label htmlFor="phone" className="input-group-text">Téléphone</label>
                                    <input name="phone" id="phone" type="tel" pattern="[0-9]{10}" className="input-group-text flex-fill"/>
                                </div>
                            </div>

                            {/* Send Btn */}
                            <input className="form-item App-btn btn btn-dark" alt="send" type="submit"/>
                        </form>
                    </div>
                    {loginError && (
                        <div className="error container text-bg-danger text-center">{errorMessage}</div>
                    )}
                    {LoginSuccess && (
                        <div className="error container text-bg-success text-center">{errorMessage}</div>
                    )}
                </div>
            </main>
            <FooterDisplay />
        </>
    );
};

export default SignUpPage;