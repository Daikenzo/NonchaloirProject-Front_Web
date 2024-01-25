import { useNavigate } from "react-router-dom";

// BTN Box Nav
const BtnSendBoxNav = ({type, itemData, SendFetch, CancelFetch}) =>{
    const navigate = useNavigate();


    const handleSendItem = () =>{
        console.log("click Send")
    };

    const handleCancelItem = () =>{
        console.log("click Cancel")
        navigate(CancelFetch)
    }

    
    return( 
        <div className="event-btnbox p-2 d-grid gap-2 d-md-flex justify-content-md-end">
            
            {SendFetch && 
            <button type="button" onClick={handleSendItem} className="btn btn-outline-success">
                Envoyer
            </button>}
            {CancelFetch &&
            <button type="button" onClick={handleCancelItem} className="btn btn-outline-danger">
                Annuler
            </button>}
            
            
        </div>  
    );
};

export default BtnSendBoxNav;