import React from 'react';
import './dialog.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const DialogBox = () => {
    const [open, setOpen] = React.useState(false);

    const deslogar = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("idGestor", "");
        window.location.href = "login"
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="div-btn-sair"><Button className="btn-sair" onClick={deslogar}>sair</Button></div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Deslogar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Você realmente deseja sair? Você será deslogado!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="dialog-login-revendedora" onClick={handleConfirm} color="primary">Sim</Button>
                    <Button className="dialog-login-revendedora" onClick={handleClose} color="primary">Não</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DialogBox;
