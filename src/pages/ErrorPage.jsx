import { useRouteError } from "react-router-dom";
import HeaderDisplay from "../components/common/Header/HeaderDisplay";
import {UserDefault, users} from "../debug/sampleBd/users";
import FooterDisplay from "../components/public/Footer/FooterDisplay";
import FooterDisplayAdmin from "../components/admin/Footer/FooterDisplayAdmin";

const ErrorPage = ({logo, error, dashboard}) => {
    //Error Type Value (404: Not Found) / 403 :Forbiden
    const getError = {
        status: error
    }
    // If a non admin open dashboard, transform any error into 403
    if (users[UserDefault].role !== "admin" && dashboard){
        error = 403
    }
    // Set Error Info Data
    if (error === 404){
        getError.message = "Page Non trouvée";
        getError.describe = "La page demandée n'existe pas";
        getError.status = error
    }
    if (error === 401 || error === 403){
        getError.message = "Accès non autorisé";
        getError.describe = "Vous n'avez pas accès au contenu de cette page";
        getError.status = error
    }
    // Display
    return (
        <>
            {!dashboard? <HeaderDisplay />: <HeaderDisplay dashboard={true} />}
            <main className="App-main container-fluid">
                <div className="container alert">
                    <h3 className="uppercase">Erreur {getError.status} - {getError.message}</h3>
                    <p>{getError.describe}</p>
                </div>
            </main>
            {!dashboard? <FooterDisplay /> : <FooterDisplayAdmin />}
        </>
    )
};

export default ErrorPage;