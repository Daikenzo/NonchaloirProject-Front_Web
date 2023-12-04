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

const LoginPage = () => {
    // Init
    const navigate = useNavigate();
    // Set Default State
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Mot de passe ou identifiant incorrect")
    
    // const loginCreateResponse = await fetch(`https:/${API.defaultpath}/login`)


    const handleLoginSubmit = async (event) =>{

        // disable Default Reload
        event.preventDefault();
        // Get Login Info
        const identifiant = event.target.usermail.value; // Identifiant used: email
        const password = event.target.password.value;

        // Verification Empty form - return error if empty
        if (identifiant === '' || password === '') {
            setErrorMessage("Les champs ne peux pas être vide")
            return setLoginError(true)
        } else {
            setErrorMessage("Mot de passe ou identifiant incorrect")
            setLoginError(false)
        }
        const loginResponse = await fetch(`http://${API.defaultpath}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({ identifiant, password }),
          });
      
          // si la réponse est valide
          if (loginResponse.status === 200) {
            const loginData = await loginResponse.json();
      
            // je récupère le jwt dans le data
            const jwt = loginData.data;
            console.log(jwt)
            // je stocke le jwt dans un cookie
            Cookies.set("jwt", jwt);
      
            // on récupère le username dans le jwt
            // on récupère toutes les infos de l'user via l'api
            // en fonction du rôle récupéré avec l'appel fetch
            // on redirige vers l'accueil admin si le role est admin ou editor
            // sinon on redirige vers l'accueil public
      
            const user = jwtDecode(jwt);

            if (user.data.role === 3 || user.data.role === 2) {
                navigate("/admin");
              } else {
                navigate("/");
              }
          } else {
            setLoginError(true)
          }
        };
    // If Enter into Login Page with jwt remove this
    useEffect(() => {
        if (Cookies.get("jwt")) {
          Cookies.remove("jwt")
        }
      }, []);

    // display
    return (
        <>
            <HeaderDisplay/>
            <main onSubmit={handleLoginSubmit} className='App-main main-container d-flex justify-content-between align-content-center col-2 login'>
                <div className=" container-fluid">
                    <div className="card">
                        <div className="flex-row justify-content-center card-header card-title">
                            <h3 className="m-auto"><div className="App-Link fw-bold">Connexion</div></h3>
                            <h3 className=" m-auto"><Link className="App-link link-dark">Incription</Link></h3>
                        </div>
                        
                        <form  className="card card-body ContactForm App-form p-2">

                            <div className="form-item input-group form-control">
                                <label htmlFor="usermail" className="input-group-text">Identifiant</label>
                                <input name="usermail" type="text" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="password" className="input-group-text">Mot de passe</label>
                                <input name="password" type="password" className="input-group-text flex-fill"/>
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

export default LoginPage;