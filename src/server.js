const express = require("express");
const routes = require("./routes.js");
const app = express();

require("./database");

app.use(express.json());

app.use(routes);

app.listen(3030, console.log("Rodando na porta: 3030"))