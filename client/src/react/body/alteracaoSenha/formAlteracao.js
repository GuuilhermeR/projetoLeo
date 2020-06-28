import React from 'react';
import './formAlteracao.css';
import 'materialize-css/dist/css/materialize.min.css';
import Button from '@material-ui/core/Button';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import ShowPassword from '../../../functions/showPassword';


const voltarChangePassword = () => {
    window.location.href = "EscolheConfig";
}


const AlterarSenhaUser = () => {
    try{
        if(!ValidaCamposNulosAteraSenha()){
            if(NovasSenhasCoincidem()){
                ApiService.AlteraSenha(localStorage.getItem("idGestor"), document.getElementById("SenhaAtual").value, document.getElementById("NovaSenha").value)
                .then(res => {
                    if (res.status === 200) {
                        PopUp.exibeMensagem('success', res.message);
                        localStorage.setItem("token", "");
                        localStorage.setItem("idGestor", "");
                        window.location.href="/login";
                    }
                    else
                        PopUp.exibeMensagem('error', res.message);
                })
                .catch(err => PopUp.exibeMensagem('error', "Não foi possível comunicar com a API"));
            }
        }
        else
            PopUp.exibeMensagem('error', 'Preenche todos os campos!');
    }
    catch(err){
        console.log(err.message);
    }
}


const ValidaCamposNulosAteraSenha = () => {
    try{
        if(document.getElementById("SenhaAtual").value !== ""){
            if(document.getElementById("NovaSenha").value !== ""){
                if(document.getElementById("ConfirmaNovaSenha").value !== ""){
                    return false;
                }
            }
        }
        return true;
    }
    catch(err){
        console.log(err.message);
    }
}


const NovasSenhasCoincidem = () => {
    try{
        if(document.getElementById("NovaSenha").value === document.getElementById("ConfirmaNovaSenha").value)
            return true;
        else{
            PopUp.exibeMensagem('error', "Os campos de 'Nova Senha' não coincidem!");
            document.getElementById("NovaSenha").value = "";
            document.getElementById("ConfirmaNovaSenha").value = "";
            return false;
        }
    }
    catch(err){
        console.log(err.message);
    }
}

const ViewSenhaAtual = () => { ShowPassword.View("SenhaAtual", "VisibleActualPassw", "VisibleActualPasswOff") };
const ViewNovaSenha = () => { ShowPassword.View("NovaSenha", "VisibleNewPassw", "VisibleNewPasswOff") };
const ViewConfNovaSenha = () => { ShowPassword.View("ConfirmaNovaSenha", "VisibleConfNewPassw", "VisibleConfNewPasswOff") };


class FormAlteracao extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="div-assist-change-passw"></div>
                            <div className="div-inputs-change-passw">
                                <VisibilityTwoToneIcon id="VisibleActualPassw" className="visible-password-pos" onClick={ViewSenhaAtual}/>
                                <VisibilityOffTwoToneIcon id="VisibleActualPasswOff" className="visible-password-off-pos" onClick={ViewSenhaAtual}/>
                                <input type="password" id="SenhaAtual" className="inputs-user-password" placeholder="Digite a senha atual..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-change-passw"></div>
                            <div className="div-inputs-change-passw">
                                <VisibilityTwoToneIcon id="VisibleNewPassw" className="visible-password-pos" onClick={ViewNovaSenha}/>
                                <VisibilityOffTwoToneIcon id="VisibleNewPasswOff" className="visible-password-off-pos" onClick={ViewNovaSenha}/>
                                <input type="password" id="NovaSenha" className="inputs-user-password" placeholder="Digite a nova senha..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-change-passw"></div>
                            <div className="div-inputs-change-passw">
                                <VisibilityTwoToneIcon id="VisibleConfNewPassw" className="visible-password-pos" onClick={ViewConfNovaSenha}/>
                                <VisibilityOffTwoToneIcon id="VisibleConfNewPasswOff" className="visible-password-off-pos" onClick={ViewConfNovaSenha}/>
                                <input type="password" id="ConfirmaNovaSenha" className="inputs-user-password" placeholder="Confirme a nova senha..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-change-passw"/>
                            <div className="div-inputs-change-passw"> 
                                <Button className="button-style-user-password" onClick={AlterarSenhaUser}>Alterar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-voltar-change-passw"><Button className="btn-voltar-change-passw" onClick={voltarChangePassword}>Voltar</Button></div>
            </div>
        )
    }
}
export default FormAlteracao;
