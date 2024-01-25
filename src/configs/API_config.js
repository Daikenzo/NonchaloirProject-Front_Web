// const { Navigate } = require("react-router-dom")
const Cookies = require('js-cookie');
const { jwtDecode } = require("jwt-decode");

// API config
const listen = {
    host:`localhost`,
    port:8010
}
const API = {
    defaultpath:`${listen.host}:${listen.port}/api`
}

// Fetch Responses Data
const getResponseData = async (fetchResponse) =>{
    const fetchResponseJson = await fetchResponse.json();
    const data = await fetchResponseJson.data;
    return data;
};
// Get Fetch Responses
const getResponse = (fetchCallResponse) =>{
    // Get Responses
    const responses = {
        ok:fetchCallResponse?fetchCallResponse.ok : null,
        status:fetchCallResponse? fetchCallResponse.status : 500
    }
    if(responses.status >= 200 &&  responses.status < 400){ // NB: marche que pour le jwt / login
        responses.data = getResponseData(fetchCallResponse);
    }
    return responses;
}
// Token
const jwt ={
    data: Cookies.get("jwt") || null, // JWT
    set: (jwt) =>{ // Create JWT Cookie
        // Set Cookie Expiration (By Second)
        const CookieExpiration = 60 * 60;
        // Create expiration Date
        const expireDate = new Date( 
            new Date().getTime() + CookieExpiration * 1000
        );
        // Decode JWT Data and set
        const user = jwtDecode(jwt);
        if (!user) return console.log("Erreur lors de la génération du Token JWT");
         // je stocke le jwt dans un cookie with Expirations
         return Cookies.set("jwt", jwt, { 
            expires: expireDate
        }); //localstorage.setItem("jwt");
    },
    get: () =>{ // Get Jwt Cookie
        const jwt = Cookies.get("jwt");
        // console.log("get");
        const decodedJwt = jwt? (jwtDecode(jwt).data) : (null);
        return decodedJwt
    },
    remove: () => {return Cookies.remove("jwt")}
};

// Export
module.exports = {
    API, getResponse,getResponseData, jwt
};