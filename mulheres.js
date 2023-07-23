const express = require("express");
const router = express.Router();

const app = express();
const porta = 333;

const mulheres =[{
    nome : "Katia Mendes",
    imagem : "https://avatars.githubusercontent.com/u/122563827?v=4",
    minibio : "Desenvolvedora Web Junior"
},

{
    nome : "Iana Chan" ,
    imagem : " ",
    minibio :"Fundadora da PrograMaria"
},

{
    nome : "Nina da Hora",
    imagem: " ",
    minibio : " "
}
    
]


function mostraMulheres (request, response) {
response.json(mulheres);

}

function mostrarPorta () {
console.log ("Servidor criado e rodando na porta", porta);

 }

 app.use(router.get("/mulheres", mostraMulheres));
app.listen (porta, mostrarPorta);