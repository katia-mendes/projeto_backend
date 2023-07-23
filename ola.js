const express = require("express");
const router = express.Router ();

const app = express();
const porta = 333;

function mostrarOla (request,response) {
response.send("Olá,mundo!");
}

function mostrarPorta () {
console.log ("Servidor criado e rodando na porta", porta);
 }

 app.use (router.get("/ola", mostrarOla));
 app.listen (porta, mostrarPorta);