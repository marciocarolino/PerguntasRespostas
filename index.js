const express = require("express");
const app = express();

//EJS
app.set('view engine', 'ejs');


app.get("/", (request, response) => {
    var nome = "Marcio";
    var lang = "JavaScript";

    response.render("index",{
        nome: nome,
        lang: lang
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
