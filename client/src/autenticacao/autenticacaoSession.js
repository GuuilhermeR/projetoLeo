const jwt = require('jsonwebtoken');
const SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';

exports.generateToken = async (data) => {
    return jwt.sign(data, SALT_KEY, { expiresIn: '5h'});
}

exports.authorize = () => {
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("idGestor"));

    if(localStorage.getItem("token") !== "" && localStorage.getItem("token") !== "null"){
        var data = jwt.verify(localStorage.getItem("token"), SALT_KEY);

        if(data.id_gestor === parseInt(localStorage.getItem("idGestor")))
            return true;
        else
            return false;
    }
    else{
        return false;
    }
}