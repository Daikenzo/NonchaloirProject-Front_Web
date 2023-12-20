import Cookies from "js-cookie";
import { useState } from "react";
import { API } from "../../../configs/API_config";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const ContactForm = () => {
    // Init
    const navigate = useNavigate();
    // const [isEmptyForm, setIsEmptyForm] = useState(true);
    const [isError, setIsError] = useState(false);
    const [formValidation, setFormValidation] = useState("");
    
    // Function
    const HandleSendFormSubmit = async (event) => {
        // Init
        let errorMessage = "";
        const phoneRegExp = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
        // Disabled Reload Page
        event.preventDefault();
       

        // Get Form Value
        const firstname= event.target.firstname.value;
        const lastName= event.target.lastName.value;
        const email= event.target.email.value;
        const adress = event.target.adress &&{
            number: event.target.adress.number.value,
            street: event.target.adress.street.value,
            postcode : parseInt(event.target.adress.postcode.value),
            city: event.target.adress.city.value
        }
         // const subjectType= event.target.type.value;
        const subjectDescribe= event.target.subject.value;

        if (!firstname || !lastName || !email || !subjectDescribe) {
            errorMessage += "Veuillez remplir les champs obligatoire"
        }
        const phone= event.target.phone.value;
        
        if (!phone.match(phoneRegExp) && phone) {
            if (errorMessage !== "") errorMessage += " / "
            errorMessage += "Saisie(s) Incorecte(s)"
        }

        // Check error and set Message
        if (errorMessage !== "" ){
            setIsError(true)
            return setFormValidation(errorMessage);
        } else setIsError(false)

        // Set Form Data
        const contactFormData = {
            senderFirstName:firstname,
            senderLastName:lastName,
            senderEmail:email,
            senderPhone:phone !== "" ? phone : null,
            senderAdress:adress,
            subjectMessage:subjectDescribe
        }
        console.log(contactFormData)
        // Generate json of contaftForm with json.stringfy
        const formData = JSON.stringify(contactFormData)
        // Fetch
        const responseCreate = await 
        fetch(`http://${API.defaultpath}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: formData
    });

    const responseCreateJs = await responseCreate.json();
    

    };
    
    //Display
    return (
        <form onSubmit={HandleSendFormSubmit} className="card ContactForm App-form p-2">
            {isError && (
                <div className="form-item form-control text-bg-danger">
                    <div className="input-group alert-danger d-flex justify-content-center">
                    {formValidation}
                    </div> 
                </div>)}
            <div className="form-item input-group">
                <div className="form-item input-group form-control">
                    <label htmlFor="firstName" className="input-group-text ">Prénom *</label>
                    <input name="firstname" type="text" defaultValue="Marc" className="input-group-text flex-fill" required/>
                </div>
                <div className="form-item item-group input-group form-control">
                    <label htmlFor="lastName" className="input-group-text">Nom *</label>
                    <input name="lastName" type="text" defaultValue="Evans" className="input-group-text flex-fill" required/>
                </div>
            </div>
            <div className="form-item input-group flex-fill">
                <div className="w-50 form-item item-group input-group form-control">
                    <label htmlFor="email" className="input-group-text">email *</label>
                    <input name="email" type="email" className="input-group-text flex-fill"/>
                </div>
                <div className=" w-25 form-item item-group input-group form-control">
                    <label htmlFor="phone" className="input-group-text">Téléphone</ label>
                    <input name="phone" type="tel" pattern="[0-9]{10}" className="input-group-text  flex-fill"/>
                </div>
                    
            </div>
                
            <div className="form-item item-group input-group form-control flex-md-column">
                <label htmlFor="subject"  className=" input-group-text flex-md-column form-label">Sujet de la demande</label>
                <textarea name="subject" id="" cols="30" rows="10"></textarea>
            </div>
            <input className="form-item App-btn btn btn-dark" alt="send" type="submit"/>
        </form>
    );
};

export default ContactForm;