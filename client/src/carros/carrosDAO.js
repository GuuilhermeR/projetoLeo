const singletonDB = require('singleton-db');
const instanceDB = singletonDB.Instance.getInstance();

class CarrosDAO{
    createNewCarro(carro, res){
        try{
            let sql = `INSERT INTO Carros(Nome, Modelo, Cor, TipoAbastecimento, Ano, FinalPlaca, KilometragemAtual, Descricao, DadosAdicionais, IdGestor) 
                       VALUES ('${carro.nome}', '${carro.modelo}', '${carro.cor}', '${carro.tipoAbastecimento}', '${carro.ano}', '${carro.finalPlaca}', '${carro.kilometragemAtual}'
                               , '${carro.descricao}', '${carro.dadosAdicionais}', '${carro.idGestor}')`;
            instanceDB.run(sql, [], function(err) {
                if (err) {
                    res.json({
                        "status": 400,
                        "message": "Não foi possível cadastrar o carro '"+carro.nome+"'!"
                    });
                }
                else{
                    res.json({
                        "status": 201,
                        "message": "O carro '"+carro.nome+"' foi cadastrado com sucesso!",
                    });
                }
            });
        }
        catch(err){
            console.log(err.message);
        }
    }

    getAllCars(res){
        let sql = "SELECT * FROM Carros";
        instanceDB.all(sql, [], (err, rows) => {
            if (err) {
                res.json({
                    "status": 400,
                    "message": err.message
                });
            }

            if (rows != null && rows != "") {
                res.json({
                    "status": 200,
                    "message": "Carros listados com sucesso!",
                    "data": rows
                }); 
            }
            else{
                if (rows != null && rows != "") {
                    res.json({
                        "status": 200,
                        "message": "Nenhum carro encontrado!",
                        "data": rows
                    }); 
                }
            }
        });
    }

    getCarById(id, res){
        let sql = "SELECT * FROM Carros WHERE Id = "+id;
        instanceDB.get(sql, [], (err, rows) => {
            if (err) {
                res.json({
                    "status": 400,
                    "message": err.message
                });
            }

            if (rows != null && rows != "") {
                res.json({
                    "status": 200,
                    "message": "Carro encontrado com sucesso!",
                    "data": rows
                }); 
            }
            else{
                if (rows != null && rows != "") {
                    res.json({
                        "status": 200,
                        "message": "Carro encontrado!",
                        "data": rows
                    }); 
                }
            }
        });
    }

    editCar(carro, res){
        try{
            let sql = `UPDATE Carros SET Nome = '${carro.nome}', Modelo = '${carro.modelo}', Cor = '${carro.cor}', TipoAbastecimento = '${carro.tipoAbastecimento}', Ano = '${carro.ano}', 
                      FinalPlaca = '${carro.finalPlaca}', KilometragemAtual = '${carro.kilometragemAtual}', 
                      Descricao = '${carro.descricao}', DadosAdicionais = '${carro.dadosAdicionais}' WHERE Id = ${carro.id}`;
            instanceDB.run(sql, [], function(err) {
                if (err) {
                    res.json({
                        "status": 400,
                        "message": "Não foi possível cadastrar o carro '"+carro.nome+"'!"
                    });
                }
                else{
                    res.json({
                        "status": 200,
                        "message": "O carro '"+carro.nome+"' foi cadastrado com sucesso!",
                    });
                }
            });
        }
        catch(err){
            console.log(err.message);
        }
    }


    deleteCar(id, res){
        try{
            let sql = `DELETE FROM Carros WHERE Id = ${id}`;
            instanceDB.run(sql, [], function(err) {
                if (err) {
                    res.json({
                        "status": 400,
                        "message": "Não foi possível deletar este carro!"
                    });
                }
                else{
                    res.json({
                        "status": 200,
                        "message": "O carro foi deletado com sucesso!",
                    });
                }
            });
        }
        catch(err){
            console.log(err.message);
        }
    }
}
exports.CarrosDAO = CarrosDAO;