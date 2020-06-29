import React from 'react';
import './carrosSeminovos.css';
import 'materialize-css/dist/css/materialize.min.css';
import PopUp from '../../../utils/PopUp';
import ApiService from '../../../utils/ApiService';


class EncontraCarrosSemiNovos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            openDialog: false,
            dialogTitle: '',
            dialogContext: ''
        }
    }

    componentDidMount() {
        this.getNewCars();
    }

    getNewCars = () => {
        try {
            ApiService.GetSemiNewCars()
                .then(res => {
                    if (res.status === 200) {
                        PopUp.exibeMensagem('success', res.message);
                        this.setState({ dataSource: [...this.state.dataSource, ...res.data] });
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

    getToDetalhesCarro = (carId) => {
        localStorage.setItem("idCarroDetalhes",carId);
        localStorage.setItem("encontraCarros", "seminovos");
        window.location.href = "/detalhesCarro";
    }

    render() {
        return (
            <div className="scroll-carros-seminovos">
                <div className="border-carros-seminovos">
                    {this.state.dataSource.map((car) => (
                        <div className="car-seminovos-found-options" onClick={() => this.getToDetalhesCarro(car.Id)}>
                            {car.Nome+" / "+car.Ano+" / "+car.KilometragemAtual}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default EncontraCarrosSemiNovos;