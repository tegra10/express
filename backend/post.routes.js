const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
    res.json({ message: "je suis de la data" });
});

module.exports = Router;
