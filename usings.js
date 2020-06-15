//-----------------------------------------------------------------------------Dependencias de codigo-------------------------------------------------------------------------------//
var bodyParser = require('body-parser');
const nocache = require('nocache');
var cors = require("cors");
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



//------------------------------------------------------------------------------------Usings----------------------------------------------------------------------------------------//
async function Usings(express, dirname, app){
    app.use(bodyParser.urlencoded());
    app.use(nocache());
    app.disable('view cache');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    //controle de permissão
    app.use('*', function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(dirname + '/public'));
}
exports.Usings = Usings;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
