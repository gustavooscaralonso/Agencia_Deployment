//const express = require('express'); //1.Eporta Express - sintaxis de Node, no de JS

import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

const app = express(); //2. Asigna la funcion que ejecuta express

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

//Conectar la base de datos
db.authenticate()
    .then(() => console.log('BBDD Conectada'))
    .catch (error => console.log(error))

//Definir puerto
//const port = process.env.PORT || 4000; //Variable de entorno

//Habilitar PUG
app.set('view engine', 'pug');

//obtener el año actual
app.use((req,res,next) => {

    const year = new Date();

    res.locals.actualYear = year.getFullYear(); //locals son variables de express
    res.locals.nombreSitio = 'Agencia de Viajes';
    console.log(res.locals)
    return next();//fuerza a devolver el sgte middleware
});

//Agregar bodu parser para leer los datos del formulario
app.use(express.urlencoded({extend: true}));

//Definir la carpeta public
app.use(express.static('public'));

//Agregar router
app.use('/', router);//use soporta todos los verbos y agrega despues del inicio los routes

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0.';
const port = process.env.PORT || 4000;


app.listen(port, host, () => {//3. Arranca el servidor con el metodo listen
    console.log(`Servidor funcionando en puerto ${port}`);
})