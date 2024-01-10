import HeaderDisplay from '../../components/common/Header/HeaderDisplay';
import ContactForm from '../../components/public/Contact/Form/ContactForm';
import FooterDisplay from '../../components/public/Footer/FooterDisplay';

const AdherentPage = () => {
    
    return (
        <>
            <HeaderDisplay />
            <main className='App-main main-container d-flex justify-content-between align-content-center col-6'>
                <div className=" container-fluid ">
                    <h3 className=' card-title card-header text-center'>Devenir Adhérent</h3>
                    <div className="container">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                </div>
            </main>
            <FooterDisplay />
        </>

    );
};

export default AdherentPage;