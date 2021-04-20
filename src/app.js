//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import packageData from '../package.json';


//creando el servidor

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());


//rutas
app.get('/', (req, res) => {
    res.json({
            message:'Api Gestion Datos'

    })
});


/*
import usuariosRouter from './routes/usuarios.route';
import loginController from './routes/login.route';
 */



/*
app.use('/api', usuariosRouter);
app.use('/api', loginController);
 */


//libs
import { createRoles } from './libs/onInit';
createRoles();

//exportando el app
module.exports = app;