// Phone Formater
const setPhone = (phoneData =>{
    let phone = "";
    const phoneChar = phoneData? phoneData.split("") : "";
    // Reform phone char with space
    for(let i = 0; i < phoneChar.length; i++){
        if(i > 0 && i%2 === 0){
            phone += " ";
        }
        phone += phoneChar[i];
    };
    return phone;
});

export default setPhone;