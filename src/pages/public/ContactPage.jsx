import HeaderDisplay from '../../components/common/Header/HeaderDisplay';
import ContactForm from '../../components/public/Contact/Form/ContactForm';
import FooterDisplay from '../../components/public/Footer/FooterDisplay';

const ContactPage = () => {
    
    return (
        <>
            <HeaderDisplay />
            <main className='App-main main-container d-flex justify-content-between align-content-center col-6'>
                <div className=" container-fluid ">
                    <h3 className=' card-title card-header text-center'>Formulaire de contact</h3>
                    <ContactForm />
                </div>
            </main>
            <FooterDisplay />
        </>

    );
};

export default ContactPage;