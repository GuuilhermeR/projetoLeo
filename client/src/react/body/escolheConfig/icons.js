import React from 'react';
import './icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import ChangePassword from '../../images/ChangePassword.png';
import CarEdit from '../../images/car_edit.png';

const goToEditCarros = () => {
    window.location.href="tabelaCarros";
}

const goToChangePassword = () => {
    window.location.href="alteracaoSenha";
}

const Icons = () => {
    return (
        <div className="container-config-icons">
            <div className="div-cars-icon">
                <img src={CarEdit} className="img-class-icon" alt="Edicao de Carros" onClick={goToEditCarros}></img>
            </div>

            <div className="div-cars-icon">
                <img src={ChangePassword} className="img-class-icon" alt="Alteracao de Senha" onClick={goToChangePassword}></img>
            </div>
        </div>
    );
}
export default Icons;
