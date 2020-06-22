import React from 'react';
import './cards.css';
import 'materialize-css/dist/css/materialize.min.css';
import Enter_Icon from '../../../images/enter-icon.png';
import Cadastro_Carro from '../../../images/cadastro-carro.jpg';
import Cadastro_Gestor from '../../../images/cadastro-gestor.jpg';

const goToCadastroCarros = () => { window.location.href = "cadastroCarros" };
const goToCadastroGestor = () => { window.location.href = "cadastroGestor" };


const Cards = () => {
    return (
        <div>
            <div className="row card-carros-margin">
                <div className="col s12 m6 card-cadastro-style">
                    <div className="card">
                        <div className="card-image" onClick={goToCadastroCarros}>
                            <img src={Cadastro_Carro} height="160" alt="Imagem de cadastro de Carros"/>
                            <div className="btn-cad-size btn-floating halfway-fab waves-effect waves-light N/A transparent" onClick={goToCadastroCarros}><img src={Enter_Icon} alt="Enter icon"></img></div>
                        </div>
                        <div className="card-content card-cadastro-size">
                            <p>Cadastro de Carros<br/>Cadastre novos carros aqui!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row card-gestor-margin">
                <div className="col s12 m6 card-cadastro-style">
                    <div className="card">
                        <div className="card-image" onClick={goToCadastroGestor}>
                            <img src={Cadastro_Gestor} height="160" alt="Imagem de cadastro de gestores"/>
                            <div className="btn-cad-size btn-floating halfway-fab waves-effect waves-light N/A transparent" onClick={goToCadastroGestor}><img src={Enter_Icon} alt="Enter icon"></img></div>
                        </div>
                        <div className="card-content card-cadastro-size">
                            <p>Cadastro de Gestores<br/>Cadastre novos gestores para controle!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cards;
