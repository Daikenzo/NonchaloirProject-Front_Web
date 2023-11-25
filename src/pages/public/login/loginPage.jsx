// Import
import './login.scss';
import HeaderDisplay from '../../../components/common/Header/HeaderDisplay';
import { users, UserDefault } from '../../../debug/sampleBd/users';
import FooterDisplay from '../../../components/public/Footer/FooterDisplay';
import { useState } from 'react';

const LoginPage = () => {
    const [loginError, setLoginError] = useState(false);

    

    const handleLoginSubmit = async (event) =>{
        event.preventDefault();
        // Get Login Info
        const usermail = event.target.usermail.value;
        const password = event.target.password.value;

        if ((usermail || password) !== '') {
            setLoginError(false)
        } else {setLoginError(true)}
        
    }


    // display
    return (
        <>
            <HeaderDisplay/>
            <main onSubmit={handleLoginSubmit} className='App-main main-container d-flex justify-content-between align-content-center col-2 login'>
                <div className=" container-fluid">
                    <div className="card">
                        <h3 className=" card-header card-title">Connexion</h3>
                        <form  className="card card-body ContactForm App-form p-2">

                            <div className="form-item input-group form-control">
                                <label htmlFor="usermail" className="input-group-text">Identifiant</label>
                                <input name="usermail" type="text" className="input-group-text flex-fill"/>
                            </div>
                            <div className="form-item item-group input-group form-control">
                                <label htmlFor="password" className="input-group-text">Mot de passe</label>
                                <input name="password" type="password" className="input-group-text flex-fill"/>
                            </div>
                            <input className="form-item App-btn btn btn-dark" alt="send" type="submit"/>
                        </form>
                    </div>
                    {loginError && (
                        <div className="error container text-bg-danger text-center">Mot de passe ou identifiant incorrect</div>
                    )}
                </div>
            </main>
            <FooterDisplay />
        </>
    );
};

export default LoginPage;