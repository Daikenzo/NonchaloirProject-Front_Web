// BTN Box Nav
const BtnCreateBoxNav = ({type, itemData, withCreate = false, onlyCreate= false, onlyDelete=false, disableDelete=false}) =>{

    const handleCreateItem = () =>{
        console.log("click create")
    };

    const handleUpdateItem = () =>{
        console.log("click Update")
    }

    const handleCancelItem = () =>{
        console.log("click delete")
    }

    
    return( 
        <div className="event-btnbox p-2 d-grid gap-2 d-md-flex justify-content-md-end">
            
            <button type="button" onClick={handleCreateItem} class="btn btn-outline-success">
                Envoyer
            </button>
            <button type="button" onClick={handleCancelItem} disabled class="btn btn-outline-danger">
                Annuler
            </button>
            
            
        </div>  
    );
};

export default BtnCreateBoxNav;