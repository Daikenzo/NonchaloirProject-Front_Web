import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../../components/admin/Footer/FooterDisplayAdmin";
import BtnBoxNav from "../../../components/admin/Btn/BtnBoxNav";

import {API, jwt} from '../../../configs/API_config';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import BtnSendBoxNav from "../../../components/admin/Btn/BtnSendBoxNav";

const DashboardUsersCreatePage = () => {
    // Init
    const navigate = useNavigate();
    // Set Default State
    const [adressRequired, setAdressRequired] = useState(true)
    const [loginError, setLoginError] = useState(false);
    const [LoginSuccess, setSucessState] = useState(false);
    const [stateMessage, setStateMessage] = useState("Les informations sont incorrectes");
    // Check and Get UserRoleId
    
    const ActualUserId = jwt.data? jwt.get().role : 0;

    const handleOnChangeRequired = async (event) =>{
        event.preventDefault();

        // console.log(event.target.value, event.target.value === '')
        // if(event.target.value !== ''  ){
        //     setAdressRequired(true)
        // } else{
        //     setAdressRequired(false)
        // }
        
    }

    const handleCreateUser = async (event) =>{
        // disable Default Reload
        event.preventDefault();
        
        // Get Signup Info
        console.log(event.target.email.value)
        const email = event.target.email.value; // Identifiant used: email
        const password = event.target.password.value;
        // const passwordConfirm = event.target.passwordConfirm.value;
        const username = (
                event.target.username.value || event.target.username.value !== "")? event.target.username.value : (
                event.target.email.value
            );
        
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const birthday = event.target.birthday.value? event.target.birthday.value : null
        const RoleId = parseInt(event.target.roleId.value);
        const adress = {
            "number": parseInt(event.target.adressNumber.value),
            "street": event.target.street.value,
            "postcode": parseInt(event.target.postcode.value),
            "city": event.target.city.value
        }

        // check adress imput
        setAdressRequired(false)
        for(let i = 0; i > adress.length; i++){
            console.log("a", i)
            if ((i % 2 === 0) && (isNaN(adress[i]) === true) ){
                setAdressRequired(true)
            }
            if (i % 2 === 1 && (adress[i] === '') ){
                setAdressRequired(true)
            }
        }

        console.log(adressRequired, "a", isNaN(adress.number))
        const phone = event.target.phone.value || null;
        console.log(password)
        // Verification Empty form - return error if empty
        console.log("teste", adress)
        if (email === '' || password === '' || firstname === '' 
            || ((adress.number !==  isNaN() || adress.street !== '' || adress.postcode !== isNaN() || adress.city !== '') 
            && (
                adress.street === '' || adress.city === '' || adress.postcode === '')
                )
            ) {
            setStateMessage("Les champs ne peux pas être vide")
            console.log(email, password, firstname)
            return setLoginError(true)
        }
        // Check verification Info
        // Invalid Value
        if((username.split(' ').join('') !== username)
            || (firstname.split(' ').join('') !== firstname)
            || (lastname.split(' ').join('') !== lastname)
        ){
            setStateMessage("Saisie Incorecte")
            return setLoginError(true)
        }
        if(RoleId <1 || RoleId > 5) {
            setStateMessage("Saisie Incorecte");
            return setLoginError(true);
        } 

        // If not error, disable message error
        setLoginError(false) 

        console.log(email, password, firstname, username, lastname, adress, phone, birthday, RoleId)
        const SignInResponse = await fetch(`http://${API.defaultpath}/users}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ email, password, firstname, username, lastname, adress, phone, birthday, RoleId}),
          });
          if(!SignInResponse.ok && SignInResponse.status >= 500){
            console.log("erreur serveur")
            navigate("*")
        }
          // si la réponse est valide
          if (SignInResponse.status === 201 || SignInResponse.status === 200) {
            setStateMessage("L'utilisateur a été crée")
            setSucessState(true)
            setTimeout(() => {
                navigate("/dashboard/users");
              }, "1000")
            
          } else {
            setStateMessage("L'utilisateur existe déjà")
            console.log(SignInResponse  )
            setLoginError(true)
          }
        };

        const handleCancel = () => {
            navigate("/dashboard/users")
        }
    

    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main  className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Utilisateurs</h2>
                </section>
                <section className="container subtitle-section">
                    <h3 className="">Nouveau Utilisateur</h3>
                    
                    <form  onSubmit={handleCreateUser} className="card card-body ContactForm App-form p-2">
                        <BtnSendBoxNav CancelFetch={"/dashboard/users"}/>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="firstname" className="input-group-text">Prénom</label>
                            <input name="firstname" id="firstname" type="text"className="input-group-text flex-fill" required/>
                        </div>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="lastname" className="input-group-text">Nom</label>
                            <input name="lastname" id="lastname" type="text"className="input-group-text flex-fill" required/>
                        </div>
                        <div className="form-item input-group form-control">
                            <label htmlFor="email" className="input-group-text">Email</label>
                            <input name="email" id="email" type="text" className="input-group-text flex-fill" required/>
                        </div>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="password"className="input-group-text">Mot de passe</label>
                            <input name="password" id="password" autoComplete="section-red" type="password" className="input-group-text flex-fill" required/>
                        </div>
                        <div className="form-item input-group form-control">
                            <label htmlFor="roleId" className="input-group-text">Role d'aminsistration/Type D'adhésion</label>
                            <select name="roleId" id="roleId" typeof="list" className="input-group-text flex-fill" defaultValue={1} required>
                                <option value="">Sélectionne un role...</option>
                                <option value="1">Non Adhérent</option>
                                <option value="2">Adherent Spectacteur / Soutiens</option>
                                <option value="3">Adherent Atelier</option>
                                {ActualUserId === 5 && <>
                                <option value="4">Editeur</option>
                                <option value="5">Admin</option>
                                </>}
                            </select>
                        </div>

                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="birthday" className="input-group-text">Date de naissance</label>
                            <input name="birthday" id="birthay" type="date" className="input-group-text flex-fill"/>
                        </div>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="username" className="input-group-text">Pseudonyme</label>
                            <input name="username" id="username" type="text"className="input-group-text flex-fill"/>
                        </div>
                        <div className="form-item item-group form-control adressForm">
                            <label htmlFor="adress" className="input-group-text">Adresse</label>
                            <div name="adress" onChangeCapture={handleOnChangeRequired} className="form-item item-group input-group form-control">
                                <div className="form-item item-group input-group flex-fill">
                                    <label htmlFor="adressNumber" className="input-group-text col-6 col-md-auto">Numéro</label>
                                    <input  name="adressNumber" id="adressNumber" type="number" className="input-group-text flex-fill"/>
                                    <label htmlFor="street" className="input-group-text col-6 col-md-auto">Libellé de la rue</label>
                                    {adressRequired? (
                                    <input  name="street" id="street" type="text" className="input-group-text flex-fill" required/>
                                    ) :
                                    <input  name="street" id="street" type="text" className="input-group-text flex-fill"/>
                                    }
                                </div>
                                    
                                <div className="form-item item-group input-group form-control flex-fill">
                                    <label htmlFor="postcode" className="input-group-text">PostCode</label>
                                    {!adressRequired? (
                                    <input name="postcode" id="postcode" type="number" className="input-group-text flex-fill" required/>
                                    ): (
                                    <input name="postcode" id="postcode" type="number" className="input-group-text flex-fill"/>
                                    )}
                                    <label htmlFor="city" className="input-group-text">Ville</label>
                                    
                                    {adressRequired? (
                                    <input name="city" id="city" type="text" className="input-group-text flex-fill" required/>
                                    ):(
                                    <input name="city" id="city" type="text" className="input-group-text flex-fill" />
                                    )}
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
                    {loginError && (
                    <div className="card bg-danger container">
                        <div className="error container text-bg-danger text-center">{stateMessage}</div>
                    </div>
                    )}
                    {LoginSuccess && (
                    <div className="card bg-success container">
                        <div className="error container text-bg-success text-center">{stateMessage}</div>
                    </div>
                    )}
                </section>
                
            </main>
            <FooterDisplay />
        </>
    );
};

export default DashboardUsersCreatePage;