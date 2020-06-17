const singletonDB = require('singleton-db');
const instanceDB = singletonDB.Instance.getInstance();
var bcrypt = require('bcryptjs');

class LoginDAO{
    selectLogin(objGestor, result){
        let sql = "SELECT * FROM Login WHERE UPPER(Login) = ?";
        var data = [];
        let params = [objGestor.login]
        instanceDB.each(sql, params, (err, row) => {
            if (err) {
                data.push({
                    "status": 400,
                    "message": err.message
                });
            }

            if (row != null) {
                if(bcrypt.compareSync(objGestor.senha, row.Senha)){
                    data.push({
                        "status": 200,
                        "message": "Login efetuado com sucesso!",
                        "data": row
                    });
                }
                else{
                    data.push({
                        "status": 400,
                        "message": "Login Incorreto!"
                    });
                }
            }
        },function(){ 
            result(data); 
        });
    }


    createGestor(objGestor, res){
        try{
            const passwordCrip = objGestor.senha;
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(passwordCrip, salt);

            let sql = `INSERT INTO Login(Nome, Login, Email, Senha) VALUES ('${objGestor.nome}', '${objGestor.login}', '${objGestor.email}', '${hash}')`;
            instanceDB.run(sql, [], function(err) {
                if (err) {
                    if(err.errno == 19){
                        res.json({
                            "status": 400,
                            "message": "Este Gestor ja existe!"
                        });
                    }
                    else{
                        res.json({
                            "status": 400,
                            "message": "Não foi possível cadastrar o gestor '"+objGestor.login+"'!"
                        });
                    }   
                }
                else{
                    res.json({
                        "status": 200,
                        "message": "O gestor '"+objGestor.login+"' foi cadastrado com sucesso!",
                    });
                }
            });
        }
        catch(err){
            console.log(err.message);
        }
    }


    VerificaSenhaAtual(idGestor, senhaAtual, novaSenha, res){
        try{
            let sql = "SELECT * FROM Login WHERE Id = ?";
            let params = [idGestor]
            instanceDB.get(sql, params, (err, row) => {
                if (err) {
                    res.json({"status": 400,"message": err.message});
                }

                if (row != null && row != "") {
                    if(bcrypt.compareSync(senhaAtual, row.Senha))
                        this.AlteraSenha(idGestor, novaSenha, res);
                    else{
                        res.json({ "status": 400, "message": "Senha Inválida!"});
                    }
                } 
                else{
                    res.json({ "status": 400, "message": "Senha Inválida!"});
                }

            });
        }
        catch(err){
            console.log(err.message);
        }
    }

    
    AlteraSenha(idGestor, novaSenha, res){
        try{
            const passwordCrip = novaSenha;
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(passwordCrip, salt);

            let sql = `UPDATE Login SET Senha = '${hash}' WHERE Id = ${idGestor}`;
            instanceDB.run(sql, [], function(err) {
                if(err){
                    res.json({
                        "status": 400,
                        "message": "Não foi possível alterar a senha!"
                    });
                }
                else{
                    res.json({
                        "status": 200,
                        "message": "Senha alterada com sucesso!",
                    });
                }   
            });
        }
        catch(err){
            console.log(err.message);
        }
    }
}
exports.LoginDAO = LoginDAO;