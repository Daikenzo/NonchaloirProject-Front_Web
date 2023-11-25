import { useState } from "react";
// import { useNavigate } from "react-router-dom";


const ContactForm = () => {
    // Init
    // const navigate = useNavigate();
    const [isEmptyForm, setIsEmptyForm] = useState(true);

    // Function
    const HandleSendFormSubmit = async (event) => {
        // Init
        
        // Disabled Reload Page
        event.preventDefault();

        // Get Form Value
        const firstname= event.target.firstname.value;
        const lastName= event.target.lastName.value;
        const email= event.target.email.value;
        const adress_number = 1;
         // const subjectType= event.target.type.value;
        const subjectDescribe= event.target.subject.value;
        // Set Form Data
        // const contactFormData = {
        //     expeditor: {
        //         firstName: firstname,
        //         lastName: lastName,
        //         email: email
        //     },
        //     type:"contactform",

        //     price: {
        //       hour: parseInt(price_hour),
        //       day: parseInt(price_day),
        //       month: parseInt(price_month),
        //     },
        //     superficy: parseInt(superficy),
        //     capacity: parseInt(capacity),
        //     address: {
        //       number: parseInt(address_number),
        //       street: address_street,
        //       postCode: parseInt(address_postcode),
        //       city: address_city,
        //     }
        //   };


        // Generate json
        const formData = new FormData();
        formData.append("data", JSON.stringify());
        
        
        
        // demo
        
        // console.log()
    };
    
    //Display
    return (
        <form onSubmit={HandleSendFormSubmit} className="card ContactForm App-form p-2">
            <div className="form-item input-group form-control">
                <label htmlFor="firstName" className="input-group-text">Prénom</label>
                <input name="firstname" type="text" className="input-group-text flex-fill"/>
            </div>
            <div className="form-item item-group input-group form-control">
                <label htmlFor="lastName" className="input-group-text">Nom</label>
                <input name="lastName" type="text" className="input-group-text flex-fill"/>
            </div>
            <div className="form-item item-group input-group form-control">
                <label htmlFor="email" className="input-group-text">email</label>
                <input name="email" type="text" className="input-group-text flex-fill"/>
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