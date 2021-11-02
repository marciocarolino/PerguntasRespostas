const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

//connection db
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgError) => {
        console.log(msgError);
    });


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


//EJS
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));


app.get("/", (request, response) => {
    response.render("index");
});

app.get("/perguntar", (request, response) => {
    response.render("perguntar");
});

app.post("/salvarpergunta", (request, response) => {
    var titulo = request.body.titulo;
    var descricao = request.body.descricao;
    response.send("Formulário recebido!!" + titulo + "========" + descricao);
});


app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
