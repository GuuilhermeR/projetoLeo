async function Get(dirname, app) {
    try{
        app.get("/api/revendedora/get/all/cars", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.getAllCars(res);
        });

        app.get("/api/revendedora/get/new/cars", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.getNewCars(res);
        });

        app.get("/api/revendedora/get/seminew/cars", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.getSeminewCars(res);
        });

        app.get("/api/revendedora/get/car/:id", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.getCarById(req.params.id, res);
        });
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

        app.post("/api/revendedora/gestor/new/:nome/:login/:email/:senha", (req, res, next) => {
            var gestoresController = require(dirname + '/client/src/login/loginController');
            var instaceGestoresController = new gestoresController.LoginController();
            instaceGestoresController.getCreateGestor(req.params.nome, req.params.login, req.params.email, req.params.senha, res);
        });

        app.post("/api/revendedora/new/car/:idGestor/:nome/:modelo/:cor/:tipoAbastecimento/:ano/:finalPlaca/:kmAtual/:descricao/:dadosAdicionais", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.createNewCar(req.params.nome, req.params.modelo, req.params.cor, req.params.tipoAbastecimento, 
            req.params.ano, req.params.finalPlaca, req.params.kmAtual, req.params.descricao, req.params.dadosAdicionais, req.params.idGestor, res);

        });
    }
    catch(err){
        console.log(err);
    }
}
exports.Post = Post;



async function Put(dirname, app) {
    try{
        app.put("/api/revendedora/gestor/alterasenha/:idGestor/:senhaAtual/:novaSenha", (req, res, next) => {
            var gestoresController = require(dirname + '/client/src/login/loginController');
            var instaceGestoresController = new gestoresController.LoginController();
            instaceGestoresController.AlteraSenhaGestor(req.params.idGestor, req.params.senhaAtual, req.params.novaSenha, res);
        });

        app.put("/api/revendedora/edit/car/:id/:nome/:modelo/:cor/:tipoAbastecimento/:ano/:finalPlaca/:kmAtual/:descricao/:dadosAdicionais", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.editCar(req.params.id, req.params.nome, req.params.modelo, req.params.cor, req.params.tipoAbastecimento, 
            req.params.ano, req.params.finalPlaca, req.params.kmAtual, req.params.descricao, req.params.dadosAdicionais, res);
        });
    }
    catch(err){
        console.log(err);
    }
}
exports.Put = Put;



async function Delete(dirname, app) {
    try{
        app.delete("/api/revendedora/delete/car/:id", (req, res, next) => {
            var carrosController = require(dirname + '/client/src/carros/carrosController');
            var instaceCarrosController = new carrosController.CarrosController();
            instaceCarrosController.deleteCar(req.params.id, res);
        });

        app.delete("/api/revendedora/delete/gestor/:idGestor/:senhaAtual", (req, res, next) => {
            var gestoresController = require(dirname + '/client/src/login/loginController');
            var instaceGestoresController = new gestoresController.LoginController();
            instaceGestoresController.deleteGestor(req.params.idGestor, req.params.senhaAtual, res);
        });
    }
    catch(err){
        console.log(err);
    }
}
exports.Delete = Delete;