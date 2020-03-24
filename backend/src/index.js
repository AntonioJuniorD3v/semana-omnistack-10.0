const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:Teste123@cluster0-uop6m.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Metodo use() vale para todas as rotas da aplicação diferente do get() que só vale para a rota especificada
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);