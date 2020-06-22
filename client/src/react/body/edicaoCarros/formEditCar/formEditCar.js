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

var Nome = '', Modelo = '', Cor = '', TipoAbastecimento = '', Ano = '', FinalPlaca = '', KilometragemAtual = '', Descricao = '', DadosAdicionais = '',
    Imagem = '', IdGestor = '';

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
            ApiService.getCarById(localStorage.getItem("ID"))
                .then(res => {
                    this.setState({ openDialog: false });
                    if (res.status === 200) { 
                        this.preencheValoresAcademia(res.data);
                    }
                    else 
                        PopUp.exibeMensagem('error', res.message); 
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar as academias'));
        }
        catch (err) {
            console.log(err.message);
        }
    }


    preencheValoresCarro = (dadosCarro) => {
        document.getElementById("nome-edit-carro").value = dadosCarro.Nome;
        document.getElementById("modelo-edit-carro").value = dadosCarro.Modelo;
        document.getElementById("cor-edit-carro").value = dadosCarro.Cor;
        document.getElementById("tipoabastecimento-edit-carro").value = dadosCarro.TipoAbastecimento;
        document.getElementById("ano-edit-carro").value = dadosCarro.DialogActions;
        document.getElementById("finalplaca-edit-carro").value = dadosCarro.FinalPlaca;
        document.getElementById("kilometragematual-edit-carro").value = dadosCarro.KilometragemAtual;
        document.getElementById("descricao-edit-carro").value = dadosCarro.Descricao;
        document.getElementById("dadosadicionais-edit-carro").value = dadosCarro.DadosAdicionais;
        document.getElementById("imagem-edit-carro").value = dadosCarro.Imagem;
        document.getElementById("idgestor-edit-carro").value = dadosCarro.IdGestor;
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
                                        if (document.getElementById("dadosadicionais-edit-carro").value !== ""){
                                            if (document.getElementById("imagem-edit-carro").value !== ""){
                                                if (document.getElementById("idgestor-edit-carro").value !== ""){
                                                    return ""
                                                } else return "IdGestor";
                                            } else return "Imagem";
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
        if (document.getElementById("dadosadicionais-edit-carro").value === "")
        DadosAdicionais = "null";
    }


    onclickAlteraAcademia = () => {
        let campoNulo = this.validaCamposNotNull();

        if (campoNulo === "") {
            this.setState({ dialogContext: "Você deseja realmente alterar a academia '" + document.getElementById("nome-edit-carro").value + "'?" });
            this.handleOpen();
        }
        else {
            PopUp.exibeMensagem('error', "O campo '" + campoNulo + "' não pode ser nulo!");
            return;
        }
    }


    getDadosAcademia = () => {
        Nome = document.getElementById("nome-edit-carro").value;
        Modelo = document.getElementById("modelo-edit-carro").value;
        Cor = document.getElementById("cor-edit-carro").value;
        TipoAbastecimento = document.getElementById("tipoabastecimento-edit-carro").value;
        Ano = document.getElementById("ano-edit-carro").value;
        FinalPlaca = document.getElementById("finalplaca-edit-carro").value;
        KilometragemAtual = document.getElementById("kilometragematual-edit-carro").value;
        Descricao = document.getElementById("descricao-edit-carro").value;
        DadosAdicionais = document.getElementById("dadosadicionais-edit-carro").value;
        Imagem = document.getElementById("imagem-edit-carro").value;
        IdGestor = document.getElementById("idgestor-edit-carro").value;
        this.validaCamposNull();
        this.alteraAcademia();
    }


    alteraAcademia = () => {
        try {
            ApiService.AlteraAcademia(localStorage.getItem("IF"), Nome, Modelo, Cor, TipoAbastecimento, Ano, FinalPlaca, KilometragemAtual, Descricao, DadosAdicionais, Imagem, IdGestor)
            .then(res => {
                if (res.status === 200) {
                    PopUp.exibeMensagem('success', res.message);
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


    cancelarEdicao = () => {
        this.getCarById();
    }


    handleOpen = () => { this.setState({ openDialog: true }); };
    dialogClose = () => { this.setState({ openDialog: false }); };
    dialogConfirm = () => {
        this.setState({ openDialog: false });
        this.getDadosCarro();
    }


    gotoEscolheCarro = () => { window.location.href = "/formEdicaoCarro"; };


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
                                <input type="text" id="nome-edit-carro" className="left-inputs-edit-carro" placeholder="Nome..." />
                                <input type="text" id="modelo-edit-carro" className="right-inputs-edit-carro" placeholder="Modelo..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="cor-edit-carro" className="left-inputs-edit-carro" placeholder="Cor..." />
                                <input type="text" id="tipoabastecimento-edit-carro" className="right-inputs-edit-carro" placeholder="Tipo de Abastecimento..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="ano-edit-carro" className="left-inputs-edit-carro" placeholder="Ano..." />
                                <input type="text" id="finalplaca-edit-carro" className="right-inputs-edit-carro" placeholder="Final da Placa..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="kilometragematual-edit-carro" className="left-inputs-edit-carro" placeholder="Kilometragem Atual..." />
                                <input type="text" id="descricao-edit-carro" className="right-inputs-edit-carro" placeholder="Descrição..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-edit-carros">
                            </div>
                            <div className="div-inputs-edit-carros">
                                <input type="text" id="dadosadicionais-edit-carro" className="left-inputs-edit-carro" placeholder="Dados adicionais..." />
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
