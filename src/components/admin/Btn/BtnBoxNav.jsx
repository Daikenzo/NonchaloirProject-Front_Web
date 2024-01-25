import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// BTN Box Nav
const BtnBoxNav = ({type, itemData, CreateFetch, UpdateFetch, onlyCreate=false, CancelFetch, onlyDelete=false, disableDelete=false}) =>{
    const [withCreate, setWithCreate] = useState(false)
    const navigate = useNavigate();

    const handleCreateItem = () =>{
        // Navigate On a Create Page
        navigate(CreateFetch)
        
    };

    const handleUpdateItem = () =>{
        console.log("click Update")
    }

    const handleDeleteItem = () =>{
        console.log("click delete")
    }

    useEffect( () =>{
        if(CreateFetch){
            setWithCreate(true)
        } else{ return setWithCreate(false)}
    },[])

    
    return( 
        <div className="event-btnbox p-2 d-grid gap-2 d-md-flex justify-content-md-end">
            {(withCreate || onlyCreate) && !onlyDelete && 
            <button type="button" onClick={handleCreateItem} className="btn btn-outline-success">Créer</button>}
            {!onlyCreate && <>
                {!onlyDelete && (
                <button type="button" onClick={handleUpdateItem} className="btn btn-outline-warning">Modifier</button>)}
                {!disableDelete ? (
                <button type="button" onClick={handleDeleteItem} className="btn btn-outline-danger">Suprimer</button>
                ) : (
                    <button type="button" onClick={handleDeleteItem} disabled className="btn btn-outline-danger">Suprimer</button>
                )}
            </>}
            
        </div>  
    );
};

export default BtnBoxNav;