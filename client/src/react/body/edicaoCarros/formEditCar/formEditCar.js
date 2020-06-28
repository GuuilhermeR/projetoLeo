import React, { Component } from 'react';
import ApiService from '../../../utils/ApiService';
import Button from '@material-ui/core/Button';
import PopUp from '../../../utils/PopUp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './formEditCar.css';
import 'materialize-css/dist/css/materialize.min.css';
let evento = '';
var Nome = '', Modelo = '', Cor = '', TipoAbastecimento = '', Ano = '', FinalPlaca = '', KilometragemAtual = '', Descricao = '', DadosAdicionais = '';
let nomeCarroAntesDeAlterar = '';

class FormEditGym extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datasource: [],
            openDialog: false,
            dialogContext: ''
        }
    }


    componentDidMount() {
        this.getCarById();
    }


    getCarById = () => {
        try {
            ApiService.GetCarById(localStorage.getItem("idCarroEdicao"))
                .then(res => {
                    this.setState({ openDialog: false });
                    if (res.status === 200) { 
                        this.preencheValoresCarro(res.data);
                    }
                    else 
                        PopUp.exibeMensagem('error', res.message); 
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os carros'));
        }
        catch (err) {
            console.log(err.message);
        }
    }


    preencheValoresCarro = (dadosCarro) => {
        nomeCarroAntesDeAlterar = dadosCarro.Nome;
        document.getElementById("nome-edit-carro").value = dadosCarro.Nome;
        document.getElementById("modelo-edit-carro").value = dadosCarro.Modelo;
        document.getElementById("cor-edit-carro").value = dadosCarro.Cor;
        document.getElementById("tipoabastecimento-edit-carro").value = dadosCarro.TipoAbastecimento;
        document.getElementById("ano-edit-carro").value = dadosCarro.Ano;
        document.getElementById("finalplaca-edit-carro").value = dadosCarro.FinalPlaca;
        document.getElementById("kilometragematual-edit-carro").value = dadosCarro.KilometragemAtual;
        document.getElementById("descricao-edit-carro").value = dadosCarro.Descricao;
        document.getElementById("dadosAdicionais-edit-carro").value = dadosCarro.DadosAdicionais;
    }


    validaCamposNotNull = () => {
        if (document.getElementById("nome-edit-carro").value !== "") {
            if (document.getElementById("modelo-edit-carro").value !== "") {
                if (document.getElementById("cor-edit-carro").value !== "") {
                    if (document.getElementById("tipoabastecimento-edit-carro").value !== "") {
                        if (document.getElementById("ano-edit-carro").value !== "") {
                            if (document.getElementById("finalplaca-edit-carro").value !== "") {
                                if (document.getElementById("kilometragematual-edit-carro").value !== "") {
                                    if (document.getElementById("descricao-edit-carro").value !== "") {
                                        if (document.getElementById("dadosAdicionais-edit-carro").value !== ""){
                                           return "";
                                        } else return "DadosAdicionais";
                                    } else return "Descricao";
                                } else return "Kilometragem";
                            } else return "FinalPlaca";
                        } else return "Ano";
                    } else return "TipoAbastecimento";
                } else return "Cor";
            } else return "Modelo";
        } else return "Nome";
    }


    validaCamposNull = () => {
        if (document.getElementById("dadosAdicionais-edit-carro").value === "")
        DadosAdicionais = "null";
    }


    onclickAlteraCarro = () => {
        let campoNulo = this.validaCamposNotNull();

        if (campoNulo === "") {
            evento = 'alterar';
            this.setState({ dialogContext: "Você deseja realmente alterar o carro '" + nomeCarroAntesDeAlterar + "'?" });
            this.handleOpen();
        }
        else {
            PopUp.exibeMensagem('error', "O campo '" + campoNulo + "' não pode ser nulo!");
            return;
        }
    }

    onclickDeletaCarro = () => {
        evento = 'deletar';
        this.setState({ dialogContext: "Você deseja realmente deletar o carro '" + nomeCarroAntesDeAlterar + "'?" });
        this.handleOpen();
    }

    
    handleOpen = () => { this.setState({ openDialog: true }); };
    dialogClose = () => { this.setState({ openDialog: false }); };
    dialogConfirm = () => {
        this.setState({ openDialog: false });
        if(evento === 'alterar')
            this.getDadosCarro();
        else
            this.deletaCarro();
    }


    getDadosCarro = () => {
        Nome = document.getElementById("nome-edit-carro").value;
        Modelo = document.getElementById("modelo-edit-carro").value;
        Cor = document.getElementById("cor-edit-carro").value;
        TipoAbastecimento = document.getElementById("tipoabastecimento-edit-carro").value;
        Ano = document.getElementById("ano-edit-carro").value;
        FinalPlaca = document.getElementById("finalplaca-edit-carro").value;
        KilometragemAtual = document.getElementById("kilometragematual-edit-carro").value;
        Descricao = document.getElementById("descricao-edit-carro").value;
        DadosAdicionais = document.getElementById("dadosAdicionais-edit-carro").value;
        this.validaCamposNull();
        this.alteraCarro();
    }


    alteraCarro = () => {
        try {
            ApiService.AlteraCarro(localStorage.getItem("idCarroEdicao"), Nome, Modelo, Cor, TipoAbastecimento, Ano, FinalPlaca, KilometragemAtual, Descricao, DadosAdicionais)
            .then(res => {
                if (res.status === 200) {
                    PopUp.exibeMensagem('success', res.message);
                    nomeCarroAntesDeAlterar = document.getElementById("nome-edit-carro").value;
                    this.getCarById();
                }
                else
                    PopUp.exibeMensagem('error', res.message);
            })
            .catch(err => PopUp.exibeMensagem('error', "Não foi possível comunicar com a API"));
        }
        catch (err) {
            console.log(err.message);
        }
    }


    deletaCarro = () => {
        try {
            ApiService.DeletaCarro(localStorage.getItem("idCarroEdicao"))
            .then(res => {
                if (res.status === 200) {
                    PopUp.exibeMensagem('success', res.message);
                    window.location.href = "/tabelaCarros";
                }
                else
                    PopUp.exibeMensagem('error', res.message);
            })
            .catch(err => PopUp.exibeMensagem('error', "Não foi possível comunicar com a API"));
        }
        catch (err) {
            console.log(err.message);
        }
    }


    cancelarEdicao = () => {
        this.getCarById();
    }


    gotoEscolheCarro = () => { window.location.href = "/tabelaCarros"; };


    render() {
        return (
            <div>
                <Dialog open={this.state.openDialog} onClose={this.dialogClose} aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Aviso!</DialogTitle>
                    <DialogContent> <DialogContentText>{this.state.dialogContext}</DialogContentText> </DialogContent>
                    <DialogActions>
                        <Button className="button-dialog-form-editCar" onClick={this.dialogConfirm}>Sim</Button>
                        <Button className="button-dialog-form-editCar" onClick={this.dialogClose}>Não</Button>
                    </DialogActions>
                </Dialog>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="div-assist-edit-carros"></div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="nome-edit-carro" className="left-inputs-edit-carros" placeholder="Nome..." />
                                <input type="text" id="modelo-edit-carro" className="right-inputs-edit-carros" placeholder="Modelo..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="cor-edit-carro" className="left-inputs-edit-carros" placeholder="Cor..." />
                                <input type="text" id="tipoabastecimento-edit-carro" className="right-inputs-edit-carros" placeholder="Tipo de Abastecimento..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="ano-edit-carro" className="left-inputs-edit-carros" placeholder="Ano..." />
                                <input type="text" id="finalplaca-edit-carro" className="right-inputs-edit-carros" placeholder="Final da Placa..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="kilometragematual-edit-carro" className="left-inputs-edit-carros" placeholder="Kilometragem Atual..." />
                                <input type="text" id="descricao-edit-carro" className="right-inputs-edit-carros" placeholder="Descrição..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                            <textarea type="text" id="dadosAdicionais-edit-carro" className="textArea-inputs-carros" placeholder="Dados Adicionais..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <Button className="button-style left-inputs-edit-carros" onClick={this.onclickAlteraCarro}>Alterar</Button>
                                <Button className="button-style right-inputs-edit-carros" onClick={this.onclickDeletaCarro}>Deletar</Button>
                            </div>
                        </div>

                    </div>
                </div>
                <Button className="button-edicao" onClick={this.gotoEscolheCarro}> Voltar </Button>
                <Button className="button-edicao" onClick={this.cancelarEdicao}> Cancelar </Button>
            </div>
        );
    }
}
export default FormEditGym;
