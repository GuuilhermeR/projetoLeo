import React from 'react';
import './cadastroCarros.css';
import 'materialize-css/dist/css/materialize.min.css';
import Button from '@material-ui/core/Button';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

var evento = '';
var idGestor = '', nome = '', modelo = '', cor = '', tipoAbastecimento = '', ano = '', finalPlaca = '',
    kmAtual = '', descricao = '', dadosAdicionais = '';


const voltarCarros = () => {
    window.location.href = "escolheAcao";
}


const validaCamposNotNull = () => {
    if (document.getElementById("nome-carro").value !== "") {
        if (document.getElementById("modelo-carro").value !== "") {
            if (document.getElementById("cor-carro").value !== "") {
                if (document.getElementById("tipoAbastecimento-carro").value !== "") {
                    if (document.getElementById("ano-carro").value !== "") {
                        if (document.getElementById("finalPlaca-carro").value !== "") {
                            if (document.getElementById("descricao-carro").value !== "") {
                                if (document.getElementById("kmAtual-carro").value !== "") {
                                    return "";
                                } else return "Kilometragem Atual";
                            } else return "Descrição";
                        } else return "Final Placa";
                    } else return "Ano";
                } else return "Tipo Abastecimento";
            } else return "Cor";
        } else return "Modelo";
    } else return "Nome";
}


const validaCamposNull = () => {
    if (document.getElementById("dadosAdicionais-carro").value === "")
        dadosAdicionais = "null";
}


class FormCadastro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openDialog: false,
            dialogTitle: '',
            dialogContext: ''
        }
    }


    onclickLimpaCampos = () => {
        evento = 'LimpaCampos';
        this.setState({ dialogTitle: 'Limpar Campos!' });
        this.setState({ dialogContext: 'Você deseja realmente limpar os campos?' });
        this.handleOpen();
    }


    onclickCadastraCarro = () => {
        let campoNulo = validaCamposNotNull();

        if (campoNulo === "") {
            evento = 'CadastraCarro';
            this.setState({ dialogTitle: 'Cadastro!' });
            this.setState({ dialogContext: "Você deseja realmente cadastrar o carro '" + document.getElementById("nome-carro").value + "'?" });
            this.handleOpen();
        }
        else {
            PopUp.exibeMensagem('error', "O campo '" + campoNulo + "' não pode ser nulo!");
            return;
        }
    }


    getDadosCarro = () => {
        idGestor = localStorage.getItem("idGestor");
        nome = document.getElementById("nome-carro").value;
        modelo = document.getElementById("modelo-carro").value;
        cor = document.getElementById("cor-carro").value;
        tipoAbastecimento = document.getElementById("tipoAbastecimento-carro").value;
        ano = document.getElementById("ano-carro").value;
        finalPlaca = document.getElementById("finalPlaca-carro").value;
        kmAtual = document.getElementById("kmAtual-carro").value;
        descricao = document.getElementById("descricao-carro").value;
        dadosAdicionais = document.getElementById("dadosAdicionais-carro").value;
        validaCamposNull();
        this.cadastrarCarro();
    }


    cadastrarCarro = () => {
        ApiService.CadastraCarro(idGestor, nome, modelo, cor, tipoAbastecimento, ano, finalPlaca, kmAtual, descricao, dadosAdicionais)
            .then(res => {
                if (res.status === 201) {
                    PopUp.exibeMensagem('success', res.message);
                    this.limpaCampos();
                }
                else
                    PopUp.exibeMensagem('error', res.message);
            })
        .catch(err => PopUp.exibeMensagem('error', "Não foi possível comunicar com a API"));
    }


    limpaCampos = () => {
        document.getElementById("nome-carro").value = "";
        document.getElementById("modelo-carro").value = "";
        document.getElementById("cor-carro").value = "";
        document.getElementById("tipoAbastecimento-carro").value = "";
        document.getElementById("ano-carro").value = "";
        document.getElementById("finalPlaca-carro").value = "";
        document.getElementById("kmAtual-carro").value = "";
        document.getElementById("descricao-carro").value = "";
        document.getElementById("dadosAdicionais-carro").value = "";
    }


    handleOpen = () => { this.setState({ openDialog: true }); };
    handleClose = () => { this.setState({ openDialog: false }); };
    handleConfirm = () => {
        this.handleClose();
        if (evento === "LimpaCampos")
            this.limpaCampos();
        else
            this.getDadosCarro();
    }



    render() {
        return (
            <div>
                <Dialog open={this.state.openDialog} onClose={this.handleClose} aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">{this.state.dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.dialogContext}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="dialog-cad-carros" onClick={this.handleConfirm} color="primary">Sim</Button>
                        <Button className="dialog-cad-carros" onClick={this.handleClose} color="primary">Não</Button>
                    </DialogActions>
                </Dialog>
                <div className="convertToBlob">

                </div>
                <div className="container div-cadastro-carros">
                    <div>
                        <div className="row">
                            <div className="div-assist-carros"></div>
                            <div className="div-inputs-carros">
                                <input type="text" id="nome-carro" className="left-inputs-carros" placeholder="Nome..." />
                                <input type="text" id="ano-carro" className="right-inputs-carros" placeholder="Ano..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-carros">
                            </div>
                            <div className="div-inputs-carros">
                                <input type="text" id="modelo-carro" className="left-inputs-carros" placeholder="Modelo..." />
                                <input type="text" id="finalPlaca-carro" className="right-inputs-carros" placeholder="Final da Placa..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-carros">
                            </div>
                            <div className="div-inputs-carros">
                                <input type="text" id="cor-carro" className="left-inputs-carros" placeholder="Cor..." />
                                <input type="text" id="descricao-carro" className="right-inputs-carros" placeholder="Descrição..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-carros">
                            </div>
                            <div className="div-inputs-carros">
                                <input type="text" id="tipoAbastecimento-carro" className="left-inputs-carros" placeholder="Tipo Abastecimento..." />
                                <input type="text" id="kmAtual-carro" className="right-inputs-carros" placeholder="Kilometragem Atual..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-carros">
                            </div>
                            <div className="div-inputs-carros">
                                <textarea type="text" id="dadosAdicionais-carro" className="textArea-inputs-carros" placeholder="Dados Adicionais..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-carros">
                            </div>
                            <div className="div-inputs-carros">
                                <Button className="button-style right-inputs-carros" onClick={this.onclickCadastraCarro}>Cadastrar</Button>
                            </div>
                        </div>

                    </div>
                </div>
                <Button className="btn-cad-carros" onClick={voltarCarros}>Voltar</Button>
                <Button className="btn-cad-carros" onClick={this.onclickLimpaCampos}>Limpar</Button>
            </div>
        )
    }
}
export default FormCadastro;
