const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const index = express();
//importar rutas
const rutaCliente = require("./rutas/cliente.js");
const { dirname } = require('path');
//settings of configuration
index.set('port', process.env.PORT || 3000);
index.set('view engine','ejs');
index.set('views', path.join(__dirname , 'vistas'));


// Middleware

index.use(morgan('dev'));
index.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Yeiglo20@',
    port: 3306,
    database: 'doctorado'
},'single'));
//recibe los datos a travez de una propiedad del rquest llamado body
index.use(express.urlencoded({extended: false}));


//routes 
index.use('/',rutaCliente);

//archivos estaticos

index.use(express.static(path.join(__dirname,'public')));


//starting the server
index.listen(index.get('port'), () => {
    console.log('Server on port 300');
});