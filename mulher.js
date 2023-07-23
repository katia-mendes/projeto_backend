const express = require("express");
const router = express.Router();

const app = express();
const porta = 333;

function mostrarMulher (requist,response) {
response.json ( {
    nome : "Katia Mendes",
    imagem : "https://avatars.githubusercontent.com/u/122563827?v=4",
    minibio : "Desenvolvedora Web Junior"
})
}

function mostrarPorta () {
console.log ("Servidor criado e rodando na porta", porta);

 }
app.use (router.get("/mulher", mostrarMulher));
app.listen (porta, mostrarPorta);

