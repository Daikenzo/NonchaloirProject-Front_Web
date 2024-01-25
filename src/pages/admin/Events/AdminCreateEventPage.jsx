import HeaderDisplay from "../../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../../components/admin/Footer/FooterDisplayAdmin";
import BtnBoxNav from "../../../components/admin/Btn/BtnBoxNav";

import {API, jwt} from '../../../configs/API_config';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

const DashboardEventsCreatePage = () => {
    // Init
    const navigate = useNavigate();
    // Set Default State
    const [adressRequired, setAdressRequired] = useState(true)
    const [loginError, setLoginError] = useState(false);
    const [LoginSuccess, setSucessState] = useState(false);
    const [stateMessage, setStateMessage] = useState("Les informations sont incorrectes");
    // Check and Get UserRoleId
    console.log(jwt)

    const ActualUserId = jwt.data? jwt.get().role : 0;
    console.log()

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
        // const passwordConfirm = event.target.passwordConfirm.value;
        const username = (
                event.target.username.value || event.target.username.value !== "")? event.target.username.value : (
                event.target.email.value
            );
        
        const eventName = event.target.name.value;
        const description = event.target.describe.value;
        const creationDate = event.target.creationDate.value? event.target.creationDate.value : null
        const eventDate = event.target.creationDate.value;
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
        console.log("")
        // Verification Empty form - return error if empty
        console.log("teste", adress)
        if (eventName === '' || description || eventDate === ""
            || ((adress.number !==  isNaN() || adress.street !== '' || adress.postcode !== isNaN() || adress.city !== '') 
            && (
                adress.street === '' || adress.city === '' || adress.postcode === '')
                )
            ) {
            setStateMessage("Les champs ne peux pas être vide")
            console.log(description, eventName)
            return setLoginError(true)
        }
        // Check verification Info
        // Invalid Value
        if((username.split(' ').join('') !== username)
            || (eventName.split(' ').join('') !== eventName)
            || (description.split(' ').join('') !== description)
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

        console.log(email, eventName, username, description, adress, phone, creationDate, eventDate, RoleId)
        const SignInResponse = await fetch(`http://${API.defaultpath}/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ email, eventName, username, description, adress, phone, creationDate, RoleId}),
          });
          if(!SignInResponse.ok && SignInResponse.status >= 500){
            console.log("erreur serveur")
            navigate("*")
        }
          // si la réponse est valide
          if (SignInResponse.status === 201 || SignInResponse.status === 200) {
            setStateMessage("L'évènement a été crée")
            setSucessState(true)
            setTimeout(() => {
                navigate("/dashboard/events");
              }, "1000")
            
          } else {
            setStateMessage("L'évènement existe déjà")
            console.log(SignInResponse  )
            setLoginError(true)
          }
        };

        const handleCancel = () => {
            navigate("/dashboard/events")
        }
    // If Enter into Login Page with jwt remove this
    useEffect(() => {
        if(!jwt.data){
            console.log("a")
            navigate("/")
        }
        
      }, []);

    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main  className="App-main main-container">
                <section className="container title-section">
                    <h2 className="App-title">Dashboard / Spectacles & Evenement / Create</h2>
                </section>
                <section className="container subtitle-section">
                    <h3 className="">Nouveau Utilisateur</h3>
                    
                    <form  onSubmit={handleCreateUser} className="card card-body ContactForm App-form p-2">
                        <div className="event-btnbox p-2 d-grid gap-2 d-md-flex justify-content-md-end">
                            <input className="btn btn-outline-success" alt="send" type="submit"/>
                            <button type="button" onClick={handleCancel} className="btn btn-outline-danger">
                                Annuler
                            </button>
                        </div>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="name" className="input-group-text">Nom de l'évènement</label>
                            <input name="name" id="name" type="text"className="input-group-text flex-fill" required/>
                        </div>
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="describe" className="input-group-text">Description</label>
                            <textarea name="describe" id="describe" type="text"className="input-group-text flex-fill" required/>
                        </div>
                        
                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="eventDate" className="input-group-text">Date de représentation</label>
                            <input name="eventDate" id="birthay" type="date" className="input-group-text flex-fill"/>
                        </div>
                        <div className="form-item input-group form-control">
                            <label htmlFor="roleId" className="input-group-text">Type D'évènement</label>
                            <select name="roleId" id="roleId" typeof="list" className="input-group-text flex-fill" defaultValue={0} required>
                                <option value="">Sélectionne un role...</option>
                                <option value="1">Spectacle</option>
                                <option value="2">Évènement</option>
                            </select>
                        </div>

                        <div className="form-item item-group input-group form-control">
                            <label htmlFor="creationDate" className="input-group-text">Date de création</label>
                            <input name="creationDate" id="birthay" type="date" className="input-group-text flex-fill"/>
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
                            <div className="form-item input-group form-control">
                                <label htmlFor="email" className="input-group-text">Email</label>
                                <input name="email" id="email" type="text" className="input-group-text flex-fill" required/>
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

export default DashboardEventsCreatePage;