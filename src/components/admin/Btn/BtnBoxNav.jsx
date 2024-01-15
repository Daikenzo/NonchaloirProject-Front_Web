// BTN Box Nav
const BtnBoxNav = ({type, itemData, withCreate = false, onlyCreate= false, onlyDelete=false, disableDelete=false}) =>{

    const handleCreateItem = () =>{
        console.log("click create")
    };

    const handleUpdateItem = () =>{
        console.log("click Update")
    }

    const handleDeleteItem = () =>{
        console.log("click delete")
    }

    
    return( 
        <div className="event-btnbox p-2 d-grid gap-2 d-md-flex justify-content-md-end">
            {(withCreate || onlyCreate) && !onlyDelete && 
            <button type="button" onClick={handleCreateItem} class="btn btn-outline-success">Créer</button>}
            {!onlyCreate && <>
                {!onlyDelete && (
                <button type="button" onClick={handleUpdateItem} class="btn btn-outline-warning">Modifier</button>)}
                {!disableDelete ? (
                <button type="button" onClick={handleDeleteItem} class="btn btn-outline-danger">Suprimer</button>
                ) : (
                    <button type="button" onClick={handleDeleteItem} disabled class="btn btn-outline-danger">Suprimer</button>
                )}
            </>}
            
        </div>  
    );
};

export default BtnBoxNav;