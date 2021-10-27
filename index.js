const express = require("express");
const app = express();

//EJS
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));


app.get("/", (request, response) => {
    response.render("index");
});

app.get("/perguntar",(request, response) =>{
    response.render("perguntar");
});


app.listen(3000, () => {
    console.log("Servidor rodando com sucesso!!!");
});
