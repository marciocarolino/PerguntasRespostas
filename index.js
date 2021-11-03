const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

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
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC']]
    }).then(perguntas => {
        response.render("index", {
            perguntas: perguntas
        });
    });
});

app.get("/perguntar", (request, response) => {
    response.render("perguntar");
});

app.post("/salvarpergunta", (request, response) => {
    var titulo = request.body.titulo;
    var descricao = request.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        response.redirect("/");
    }).catch((error) => {
        console.log(error);
    })
});

app.get("/pergunta/:id", (request, response) => {
    var id = request.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            response.render("pergunta", {
                pergunta: pergunta
            });
        } else {
            response.redirect("/");
        }
    }).catch((error) => {
        console.log(error);
    });
});



app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
