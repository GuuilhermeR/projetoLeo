import React from 'react';
import './cadastroGestor.css';
import 'materialize-css/dist/css/materialize.min.css';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

var nome='', login='', email='', senha='';

const voltarGestor = () => {
    window.location.href = "EscolheAcao";
}

class FormCadastro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openDialog: false,
            dialogText : ''
        }
    }

    handleOpen = () => { 
        this.setState({ 
            openDialog: true, 
            dialogText: "Você deseja realmente cadastrar o usuário '"+document.getElementById("nome").value+"'?" 
        }); 
    };
    handleClose = () => { this.setState({ openDialog: false }); };
    handleConfirm = () => { this.cadastrarGestor(); }

    validaCamposNulos = () => {
        let campoNulo = "";

        if(document.getElementById("nome").value !== ""){
            if(document.getElementById("login").value !== ""){
                if(document.getElementById("email").value !== ""){
                    if(document.getElementById("senha").value !== ""){
                        if(document.getElementById("confirma-senha").value !== ""){
                            campoNulo = "";
                        }
                        else campoNulo = "Confirma Senha";
                    }
                    else campoNulo = "Senha"
                }
                else campoNulo = "E-mail";
            }
            else campoNulo = "Login";
        }
        else campoNulo = "Nome";


        if(campoNulo !== "")
            PopUp.exibeMensagem('error', "O campo '"+campoNulo+"' não pode ser nulo!");
        else{
            let senhasCoincidem = this.validaSenhas();

            if(senhasCoincidem)
                this.handleOpen();
        }
    }

    
    validaSenhas = () => {
        if(document.getElementById("senha").value !== document.getElementById("confirma-senha").value){
            PopUp.exibeMensagem('error', "As senhas não coincidem!");
            document.getElementById("senha").value = "";
            document.getElementById("confirma-senha").value = "";
            return false;
        }
        else
            return true;

    }

    
    getDadosGestor = () => {
        nome = document.getElementById("nome").value;
        login = document.getElementById("login").value;
        email = document.getElementById("email").value;
        senha = document.getElementById("senha").value;
    }


    limpaCampos = () => {
        document.getElementById("nome").value = "";
        document.getElementById("login").value = "";
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
        document.getElementById("confirma-senha").value = "";
    }


    cadastrarGestor = () => {
        this.handleClose();
        this.getDadosGestor();
         ApiService.CriaGestor(nome, login, email, senha)
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
    

    render() {
        return (
            <div>
                <Dialog open={this.state.openDialog} onClose={this.handleClose} aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Cadastro!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.state.dialogText}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className="dialog-cad-gestor" onClick={this.handleConfirm} color="primary">Sim</Button>
                        <Button className="dialog-cad-gestor" onClick={this.handleClose} color="primary">Não</Button>
                    </DialogActions>
                </Dialog>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="div-assist-gestor"></div>
                            <div className="div-inputs-gestor">
                                <input type="text" id="nome" className="inputs-gestor" placeholder="Seu nome..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-gestor">
                            </div>
                            <div className="div-inputs-gestor">
                                <input type="text" id="login" className="inputs-gestor" placeholder="Seu Login..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-gestor">
                            </div>
                            <div className="div-inputs-gestor">
                                <input type="text" id="email" className="inputs-gestor" placeholder="Seu E-mail..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-gestor">
                            </div>
                            <div className="div-inputs-gestor">
                                <input type="password" id="senha" className="inputs-gestor" placeholder="Sua Senha..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-gestor">
                            </div>
                            <div className="div-inputs-gestor">
                                <input type="password" id="confirma-senha" className="inputs-gestor" placeholder="Confirme sua Senha..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-gestor"/>
                            <div className="div-inputs-gestor"> 
                                <Button className="button-style-gestor" onClick={this.validaCamposNulos}>Cadastrar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="btn-voltar-cad-gestor" onClick={voltarGestor}>Voltar</Button>
            </div>
        )
    }
}
export default FormCadastro;

