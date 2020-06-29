let gestorDAO = require("./loginDAO");
let gestor = require("./login");
const autenticacaoSession = require('../autenticacao/autenticacaoSession');

class LoginController{
    getCreateGestor(nome, login, email, senha, res){
        let instaceGestorDAO = new gestorDAO.LoginDAO();
        let objGestorModel =  new gestor.Login("", nome, login, email, senha);
        instaceGestorDAO.createGestor(objGestorModel, res);
    }
    
    getLoginAccess(login, senha, res){
        let dataResult = [];
        let instaceGestorDAO = new gestorDAO.LoginDAO();
        let objGestorModel =  new gestor.Login("", "", login, "", senha);
        instaceGestorDAO.selectLogin(objGestorModel, function(result){
            dataResult = result;
        });

        setTimeout(() =>{ this.validaDadosGestor(dataResult, res); }, 200); 
    }


    deleteGestor(idGestor, senhaAtual, res){
        let instaceGestorDAO = new gestorDAO.LoginDAO();
        instaceGestorDAO.validaSenhaAtualParaDeletarUser(idGestor, senhaAtual, res);
    }


    AlteraSenhaGestor(idGestor, senhaAtual, novaSenha, res){
        let instaceGestorDAO = new gestorDAO.LoginDAO();
        instaceGestorDAO.VerificaSenhaAtual(idGestor, senhaAtual, novaSenha, res);
    }


    validaDadosGestor(dataResult, res){
        if(dataResult != ""){
            if(dataResult[0].status == 200)
                this.geraAutenticacao(dataResult, res);
            else
                this.sendJsonData(dataResult, null, res);
        }
        else
            this.sendJsonData(null, null, res);
    }

    
    geraAutenticacao(dataResult, res){
        let token_ID;
        autenticacaoSession.generateToken({id_gestor: dataResult[0].data.Id})
        .then(token => {
            token_ID = token;
        });

        setTimeout(() =>{ this.sendJsonData(dataResult, token_ID, res); }, 200); 
    }


    sendJsonData(dataResult, token, res){
        if(dataResult != null){
            res.json({
                "status": dataResult[0].status,
                "message": dataResult[0].message,
                "data" : dataResult[0].data,
                "token": token
            });
        }
        else{
            res.json({
                "status": 400,
                "message": "Login Incorreto!"
            });
        }
    }
}
exports.LoginController = LoginController;