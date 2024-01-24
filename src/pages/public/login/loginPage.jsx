// Import
import './login.scss';
import HeaderDisplay from '../../../components/common/Header/HeaderDisplay';
import { users, UserDefault } from '../../../debug/sampleBd/users';
import {API, getResponse, jwt} from '../../../configs/API_config';
import FooterDisplay from '../../../components/public/Footer/FooterDisplay';
import { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
const debug = true;

const LoginPage = ({sucessState = false}) => {
    // Init
    const navigate = useNavigate();
    // Set Default State
    const [loginError, setLoginError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Mot de passe ou identifiant incorrect")
    const [successMessage, setSucessMessage] = useState("L'utilisateur a été crée")
    
    // Check is SignInState
    if(sucessState){
        setSucessMessage("Le compte a été crée")
        setTimeout(() => {
            sucessState=false;
          }, 500)
    }
    // If Manual Input Page, remove jwt
    jwt.remove();

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
        
        
        const loginFetch = await fetch(`http://${API.defaultpath}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ identifiant, password }),
          })
          .catch( error =>{
            if (error instanceof TypeError){
                console.log(error)
                setErrorMessage(error)
                setLoginError(true)
                return navigate(`/error/${500}`);
            }
          });

          const loginResponse = getResponse(loginFetch)

          if(!loginResponse.ok && loginResponse.status >= 500){
            console.log("erreur serveur")
            return navigate(`/error/${500}`);
        }
          // si la réponse est valide
          if (loginResponse.status === 200) {
            
            // je récupère le jwt dans le data e
            const loginData = await loginResponse.data
            // Get User Data and expire Token
            const user = loginData
            // Create & Set Jwt Cookie
            jwt.set(loginData)
      
            // on récupère le username dans le jwt
            // on récupère toutes les infos de l'user via l'api
            // en fonction du rôle récupéré avec l'appel fetch
            // on redirige vers l'accueil admin si le role est admin ou editor
            // sinon on redirige vers l'accueil public
                  
            // Redirect into homePage
            if (user.role === 3 || user.role === 2) {
                navigate("/");
              } else {
                navigate("/");
              }
          } else {
            // Set Error
            setLoginError(true)
          }
        };
    // If Enter into Login Page with jwt remove this
    // useEffect(() => {
    //     const jwt = Cookies.get("jwt") || null;
    //     if (jwt) {
    //     }
    //   }, []);

    // display
    return (
        <>
            <HeaderDisplay/>
            <main onSubmit={handleLoginSubmit} className='App-main main-container d-flex justify-content-between align-content-center col-2 login'>
                <div className=" container-fluid">
                {sucessState && (
                        <div className="error container text-bg-sucess text-center">{successMessage}</div>
                    )}
                    <div className="card container">
                        <div className="flex-row justify-content-center card-header card-title">
                            <h3 className="m-auto"><div className="App-Link fw-bold">Connexion</div></h3>
                            <h3 className=" m-auto"><Link to="/login/signup" className="App-link link-dark">Incription</Link></h3>
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