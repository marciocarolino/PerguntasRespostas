const express = require("express");
const app = express();

//EJS
app.set('view engine', 'ejs');


app.get("/", (request, response) => {
    var nome = "Marcio";
    var lang = "JavaScript";
    var exibirMsg = true;

    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-Cola", preco: 5.00 },
        { nome: "Leite", preco: 1.45 }
    ]



    response.render("index", {
        nome: nome,
        lang: lang,
        msg: exibirMsg,
        produtos: produtos
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
