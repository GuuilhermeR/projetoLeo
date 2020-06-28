import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ApiService from '../../../utils/ApiService';
import Button from '@material-ui/core/Button';
import PopUp from '../../../utils/PopUp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import $ from "jquery";
import './tableCar.css';
var columns = [];
var nomeCarro;
var message = "";

class TableCar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datasource: [],
            openDialog: false
        }

        PopUp.exibeMensagem('success', "Selecione uma linha com o carro desejado para editar!");

        columns = [
            { id: "Id", label: 'ID', minWidth: 150, align: 'center' },
            { id: "Nome", label: 'Nome', minWidth: 150, align: 'center' },
            { id: "Modelo", label: 'Modelo', minWidth: 150, align: 'center' },
            { id: "FinalPlaca", label: 'Final Placa', minWidth: 150, align: 'center' },
            { id: "Ano", label: 'Ano', minWidth: 70, align: 'center' },
            { id: "Cor", label: 'Cor', minWidth: 60, align: 'center' },
            { id: "KilometragemAtual", label: 'Kilometragem Atual', minWidth: 60, align: 'center' }
        ]
    }


    componentDidMount() {
        this.listAllCars();
        let _this = this;
        $("#tbCarEdit").on("click", "tbody tr", function (event) {
            $(this).addClass('selected').siblings().removeClass('selected');
            localStorage.setItem("idCarroEdicao", $(this).find('td:eq(0)').html());
            nomeCarro = $(this).find('td:eq(1)').html();
            message = "Você deseja realmente editar o carro '" + nomeCarro + "'?";
            _this.setState({ openDialog: true });
        });
    }

    listAllCars = () => {
        try {
            ApiService.GetAllCars()
                .then(res => {
                    this.setState({ openDialog: false });
                    this.setState({ datasource: [] });
                    if (res.status === 200) {this.setState({ datasource: [...this.state.datasource, ...res.data] }); }
                    else { PopUp.exibeMensagem('error', res.message); this.setState({ datasource: [] }); }
                })
                .catch(err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar as academias'));
        }
        catch (err) {
            console.log(err.message);
        }
    }

    dialogClose = () => { this.setState({ openDialog: false }); };
    dialogConfirm = () => {
        this.setState({ openDialog: false });
        window.location.href = "/formEdicaoCarro";
    }

    goToEscolheConfig = () => { window.location.href = "/escolheConfig"; };


    render() {
        return (
            <div>
                <div className="car-body">
                    <Dialog open={this.state.openDialog} onClose={this.dialogClose} aria-labelledby="draggable-dialog-title">
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Aviso!</DialogTitle>
                        <DialogContent> <DialogContentText>{message}</DialogContentText> </DialogContent>
                        <DialogActions>
                            <Button className="button-dialog-editcar-color" onClick={this.dialogConfirm}>Sim</Button>
                            <Button className="button-dialog-editcar-color" onClick={this.dialogClose}>Não</Button>
                        </DialogActions>
                    </Dialog>
                    <Paper>
                        <TableContainer className="table-container-style">
                            <Table id="tbCarEdit">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>{column.label}</TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.datasource.map((row, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>{columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
                <div className="div-button-report"> <Button className="button-voltar-report" onClick={this.goToEscolheConfig}> Voltar </Button> </div>
            </div>
        );
    }
}
export default TableCar;