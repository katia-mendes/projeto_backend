const express = require("express");

const app = express();
const porta = 333;

function mostrarPorta () {
console.log ("Servidor criado e rodando na porta", porta);

 }

app.listen (porta, mostrarPorta);