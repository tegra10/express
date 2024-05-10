const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const port = 3000;
connectDB();
const app = express();

// Les middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Les routes
// Utilisez un proxy pour rediriger les requêtes vers json-server
app.use("/post", (req, res) => {
    const httpProxy = require("http-proxy");
    const proxy = httpProxy.createProxyServer({});
    proxy.web(req, res, { target: "http://localhost:3001" });
});

app.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`);
});
