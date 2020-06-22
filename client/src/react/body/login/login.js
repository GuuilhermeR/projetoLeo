import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import './login.css';

const valida_login = () => {
  if(document.getElementById("LoginField").value === "" || document.getElementById("PasswordField").value === "")
      PopUp.exibeMensagem('error', "Login Inválido");
  else{
      ApiService.LoginGestor(document.getElementById("LoginField").value.toUpperCase(), document.getElementById("PasswordField").value)
      .then(res => {
          if (res.status === 200) {
              localStorage.setItem("token", res.token);
              localStorage.setItem("idGestor", res.data.Id);
              PopUp.exibeMensagem('success', res.message);
              setTimeout(function(){ window.location.href = 'escolheAcao' }, 100);
          }
          else{
              PopUp.exibeMensagem('error', res.message);
          }
      })
      .catch(err => PopUp.exibeMensagem('error', "Não foi possível comunicar com a API"));
  }
}

const view_password = () =>{
  let passwordField = document.getElementById("PasswordField");
  let visibleIcon = document.getElementById("visible-icon");
  let visibleIconOff = document.getElementById("visible-icon-off");
  
  if (passwordField.type === "password") {
      passwordField.type = "text";
      visibleIcon.style.setProperty('display', 'none', 'important');
      visibleIconOff.style.setProperty('display', 'initial', 'important');

  } else {
      passwordField.type = "password";
      visibleIconOff.style.setProperty('display', 'none', 'important');
      visibleIcon.style.setProperty('display', 'initial', 'important');
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3), display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1), backgroundColor: 'black',
  },
  form: {
    width: '100%', marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2), backgroundColor: '#00103B'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
        <Typography component="h1" variant="h5"> Logar </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" fullWidth id="LoginField" label="Login"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><AccountCircleTwoToneIcon /></InputAdornment>
                ),
            }}
          />
          <TextField variant="outlined" margin="normal" fullWidth label="Senha" type="password" id="PasswordField"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><LockTwoToneIcon /></InputAdornment>
                ),
            }} 
          />
          <div className="div-password-icon">
            <VisibilityTwoToneIcon id="visible-icon" className="visible-password-position" onClick={view_password} />
            <VisibilityOffTwoToneIcon id="visible-icon-off" className="visible-password-off-position" onClick={view_password} />
          </div>
          <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={valida_login}>
            Logar
          </Button>
        </form>
      </div>
    </Container>
  );
}