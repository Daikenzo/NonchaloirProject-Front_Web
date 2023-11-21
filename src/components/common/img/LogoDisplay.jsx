import logo from '../../../img/ico/Nonchaloir-logoV2.svg';

const LogoDisplay = ({classadd}) => {
    // Init default css class and add aditionnal
    let classname = classadd? `${classadd} App-logo` : `App-logo`;
    
    
    
    return (
        <>
            <img src={logo} className={classname} alt="logo" />
        </>
    );
}

export default LogoDisplay;