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
import './login.css';

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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00103B'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Logar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><AccountCircleTwoToneIcon /></InputAdornment>
                ),
            }}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><LockTwoToneIcon /></InputAdornment>
                ),
            }}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="PasswordField"
            autoComplete="current-password"
          />
          <div className="div-password-icon">
            <VisibilityTwoToneIcon id="visible-icon" className="visible-password-position" onClick={view_password} />
            <VisibilityOffTwoToneIcon id="visible-icon-off" className="visible-password-off-position" onClick={view_password} />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Logar
          </Button>
        </form>
      </div>
    </Container>
  );
}