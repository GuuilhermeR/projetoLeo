let carroDAO = require("./carrosDAO");
let carro = require("./carros");

class CarrosController{
    createNewCar(nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais, idGestor, res){
        let instaceCarroDAO = new carroDAO.CarrosDAO();
        let objCarroModel =  new carro.Carros("", nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais, idGestor);
        instaceCarroDAO.createNewCarro(objCarroModel, res);
    }

    getAllCars(res){
        let instaceCarroDAO = new carroDAO.CarrosDAO();
        instaceCarroDAO.getAllCars(res);
    }

    getCarById(id, res){
        let instaceCarroDAO = new carroDAO.CarrosDAO();
        instaceCarroDAO.getCarById(id, res);
    }

    editCar(id, nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais, res){
        let instaceCarroDAO = new carroDAO.CarrosDAO();
        let objCarroModel =  new carro.Carros(id, nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais, "");
        instaceCarroDAO.editCar(objCarroModel, res);
    }

    deleteCar(id, res){
        let instaceCarroDAO = new carroDAO.CarrosDAO();
        instaceCarroDAO.deleteCar(id, res);
    }
}
exports.CarrosController = CarrosController;