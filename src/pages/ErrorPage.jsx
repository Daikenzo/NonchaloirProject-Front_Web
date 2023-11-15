import { useRouteError } from "react-router-dom";
import HeaderDisplay from "../components/common/Header/HeaderDisplay";
import users from "../debug/sampleBd/users";

const ErrorPage = ({logo, error}) => {
    const getError = {
        status: error
    }

    if (error === 404){
        getError.message = "Page Non trouvée";
        getError.describe = "La page demandée n'existe pas";
        getError.status = error
        
    }
    return (
        <>
            <HeaderDisplay logo={logo} user={users[1]}/>
            <main className="App-main container-fluid">
                <div className="container">
                    <h3 className="uppercase">Erreur {getError.status} - {getError.message}</h3>
                    <p>{getError.describe}</p>
                </div>
            </main>
        </>
    )
};

export default ErrorPage;