import React from 'react';
import './configButton.css';
import 'materialize-css/dist/css/materialize.min.css';
import ConfigIcon from '../../../images/config_icon.png';

const ConfigButton = () => {

    const GoToConfig = () => {
        window.location.href = "escolheConfig";
    }

    return (
        <div>
            <img className="div-btn-config" alt="Imagem configurações" src={ConfigIcon} onClick={GoToConfig} width="75"></img>
        </div>
    );
}
export default ConfigButton;
