const express = require("express");
const app = express();

//EJS
app.set('view engine', 'ejs');


app.get("/", (request, response) => {
    var nome = "Marcio";
    var lang = "JavaScript";
    var exibirMsg = true;

    response.render("index",{
        nome: nome,
        lang: lang,
        msg: exibirMsg
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
