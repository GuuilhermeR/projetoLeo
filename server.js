const express = require('express');
var routes = require('./routes');
var usings = require('./usings');
const singletonDB = require('singleton-db');

const caminhoBanco = __dirname+"/db/mg_revendedora.db";
singletonDB.Instance.createInstance(caminhoBanco);

const app = express();
usings.Usings(express, __dirname, app); // Funcao responsAvel por carregar todos os mOdulos usados e permissoes de acesso ao server
const port = process.env.PORT || 5000;

//-----------------------------ROTAS - GET----------------------------------//
routes.Get(__dirname, app); 
//--------------------------------------------------------------------------//


//--------------------------ROTAS - POST-----------------------------------//
routes.Post(__dirname, app); 
//-------------------------------------------------------------------------//


//--------------------------ROTAS - PUT-----------------------------------//
routes.Put(__dirname, app); 
//-------------------------------------------------------------------------//


//--------------------------ROTAS - DELETE-----------------------------------//
routes.Delete(__dirname, app); 
//-------------------------------------------------------------------------//

app.listen(port, () => console.log(`Listening on port ${port}`));