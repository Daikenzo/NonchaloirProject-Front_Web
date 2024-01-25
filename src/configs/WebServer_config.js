// Default Web Listen
const listen = {
    host: process.env.host || `localhost`,
    port: process.env.port || 3002,
}
// Url
const PublicUrlPath = process.env.PUBLIC_URL || `${listen.host}:${listen.port}`
process.env.port = listen.port;
// Path
const defaultPath = {
    public:`/`,
    admin:`/dashboard`
}
const urlPath = {
    default:`${defaultPath.public}`,
    dashboard:`${defaultPath.admin}`,
    error:{
        default:`${defaultPath.public}/error/:id`,
        dashboard:`${defaultPath.admin}/error/`,
    }
}

// Serveor fonction
const getDate = {
    all: (date,timezone='UTC') =>{ // format "Day/Month/year HH:MM:SS"
        return new Date(date).toLocaleString('fr-FR', { timeZone: timezone })
    },
    time: (date) =>{  // HH:MM:SS"
        return new Date(date).toLocaleTimeString('fr-FR')
    },
    date: (date, timezone='UTC') =>{  // HH:MM:SS"
        const options = {
            day:"numeric",
            month:"short",
            year:"numeric"
        }
        if(timezone !== ""){
            options.timeZone = `${timezone}`;
            options.timeZoneName = "short";
        }
        return new Date(date).toLocaleTimeString('fr-FR', options)
    }
}


module.exports = {
    urlPath, getDate
}