async function Get(dirname, app) {
    try{
        //
    }
    catch(err){
        console.log(err);
    }
}
exports.Get = Get;



async function Post(dirname, app) {
    try{
        app.post("/api/revendedora/gestor/:login/:senha", (req, res, next) => {
            var loginGestorController = require(dirname + '/client/src/login/loginController');
            var instaceLoginController = new loginGestorController.LoginController();
            instaceLoginController.getLoginAccess(req.params.login, req.params.senha, res);
        });
    }
    catch(err){
        console.log(err);
    }
}
exports.Post = Post;


async function Put(dirname, app) {
    try{
        //
    }
    catch(err){
        console.log(err);
    }
}
exports.Put = Put;


async function Delete(dirname, app) {
    try{
        //
    }
    catch(err){
        console.log(err);
    }
}
exports.Delete = Delete;