"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var _db = _interopRequireDefault(require("./config/db.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require('express'); //1.Eporta Express - sintaxis de Node, no de JS
var app = (0, _express["default"])(); //2. Asigna la funcion que ejecuta express

_dotenv["default"].config({
  path: "variables.env"
}); //Conectar la base de datos


_db["default"].authenticate().then(function () {
  return console.log('BBDD Conectada');
})["catch"](function (error) {
  return console.log(error);
}); //Definir puerto
//const port = process.env.PORT || 4000; //Variable de entorno
//Habilitar PUG


app.set('view engine', 'pug'); //obtener el año actual

app.use(function (req, res, next) {
  var year = new Date();
  res.locals.actualYear = year.getFullYear(); //locals son variables de express

  res.locals.nombreSitio = 'Agencia de Viajes';
  console.log(res.locals);
  return next(); //fuerza a devolver el sgte middleware
}); //Agregar bodu parser para leer los datos del formulario

app.use(_express["default"].urlencoded({
  extend: true
})); //Definir la carpeta public

app.use(_express["default"]["static"]('public')); //Agregar router

app.use('/', _index["default"]); //use soporta todos los verbos y agrega despues del inicio los routes
//puerto y host para la app

var host = process.env.HOST || '0.0.0.0.';
var port = process.env.PORT || 4000;
app.listen(port, host, function () {
  //3. Arranca el servidor con el metodo listen
  console.log("Servidor funcionando en puerto ".concat(port));
});