import React from 'react';
import './chooseCard.css';
import 'materialize-css/dist/css/materialize.min.css';
import Enter_Icon from '../../images/enter-icon.png';
import Carros_Seminovos from '../../images/seminovo.jpg';
import Carros_Novos from '../../images/novo.jpg';

const goToCarrosSeminovos = () => { window.location.href = "carrosSeminovos" };
const goToCarrosNovos = () => { window.location.href = "carrosNovos" };


const ChooseCard = () => {
    return (
        <div>
            <div className="row card-cars-margin">
                <div className="col s12 m6 card-cars-style">
                    <div className="card">
                        <div className="card-image">
                            <img src={Carros_Seminovos} onClick={goToCarrosSeminovos} height="205" alt="Imagem de carro seminovo"/>
                            <div className="btn-cars-size btn-floating halfway-fab waves-effect waves-light N/A transparent" onClick={goToCarrosSeminovos}><img src={Enter_Icon} alt="Enter icon"></img></div>
                        </div>
                        <div className="card-content card-cars-size" onClick={goToCarrosSeminovos}>
                            <p  align="center">Carros Seminovos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row card-new-cars-margin">
                <div className="col s12 m6 card-cars-style">
                    <div className="card">
                        <div className="card-image">
                            <img src={Carros_Novos} onClick={goToCarrosNovos} height="205" alt="Imagem de carros novos"/>
                            <div className="btn-cars-size btn-floating halfway-fab waves-effect waves-light N/A transparent" onClick={goToCarrosNovos}><img src={Enter_Icon} alt="Enter icon"></img></div>
                        </div>
                        <div className="card-content card-cars-size" onClick={goToCarrosSeminovos}>
                            <p align="center">Carros Novos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseCard;
