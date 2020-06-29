import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';
import Button from '@material-ui/core/Button';
import PopUp from '../../utils/PopUp';
import './detalhesCarro.css';
import 'materialize-css/dist/css/materialize.min.css';

class DetalhesCarro extends Component {
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
            ApiService.GetCarById(localStorage.getItem("idCarroDetalhes"))
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
        document.getElementById("nome-detalhes-carro").value = dadosCarro.Nome;
        document.getElementById("modelo-detalhes-carro").value = dadosCarro.Modelo;
        document.getElementById("cor-detalhes-carro").value = dadosCarro.Cor;
        document.getElementById("tipoabastecimento-detalhes-carro").value = dadosCarro.TipoAbastecimento;
        document.getElementById("ano-detalhes-carro").value = dadosCarro.Ano;
        document.getElementById("finalplaca-detalhes-carro").value = dadosCarro.FinalPlaca;
        document.getElementById("kilometragematual-detalhes-carro").value = dadosCarro.KilometragemAtual;
        document.getElementById("descricao-detalhes-carro").value = dadosCarro.Descricao;
        document.getElementById("dadosAdicionais-detalhes-carro").value = dadosCarro.DadosAdicionais;
    }


    gotoEncontraCarros = () => { 
        if(localStorage.getItem("encontraCarros") === "novos")
            window.location.href = "/carrosNovos";
        else 
            window.location.href = "/carrosSeminovos";
    };


    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="div-assist-detalhes-carros"></div>
                            <div className="div-inputs-detalhes-carros">
                                <input type="text" id="nome-detalhes-carro" className="left-inputs-detalhes-carros" readOnly placeholder="Nome..." />
                                <input type="text" id="modelo-detalhes-carro" className="right-inputs-detalhes-carros" readOnly placeholder="Modelo..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-detalhes-carros">
                            </div>
                            <div className="div-inputs-detalhes-carros">
                                <input type="text" id="cor-detalhes-carro" className="left-inputs-detalhes-carros" readOnly placeholder="Cor..." />
                                <input type="text" id="tipoabastecimento-detalhes-carro" className="right-inputs-detalhes-carros" readOnly placeholder="Tipo de Abastecimento..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-detalhes-carros">
                            </div>
                            <div className="div-inputs-detalhes-carros">
                                <input type="text" id="ano-detalhes-carro" className="left-inputs-detalhes-carros" readOnly placeholder="Ano..." />
                                <input type="text" id="finalplaca-detalhes-carro" className="right-inputs-detalhes-carros" readOnly placeholder="Final da Placa..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-detalhes-carros">
                            </div>
                            <div className="div-inputs-detalhes-carros">
                                <input type="text" id="kilometragematual-detalhes-carro" className="left-inputs-detalhes-carros" readOnly placeholder="Kilometragem Atual..." />
                                <input type="text" id="descricao-detalhes-carro" className="right-inputs-detalhes-carros" readOnly placeholder="Descrição..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="div-assist-detalhes-carros">
                            </div>
                            <div className="div-inputs-detalhes-carros">
                            <textarea type="text" id="dadosAdicionais-detalhes-carro" className="textArea-inputs-carros" readOnly placeholder="Dados Adicionais..." />
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="button-detalhes" onClick={this.gotoEncontraCarros}> Voltar </Button>
            </div>
        );
    }
}
export default DetalhesCarro;
