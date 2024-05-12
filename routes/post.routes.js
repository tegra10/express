const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
    res.json({ message: "je suis la nouvelle data" });
});

Router.post("/", (req, res) => {
    res.json({ message: "ça a marché" });
});

Router.put("/:id", (req, res) => {
    res.json({ message: req.params.id });
});

Router.delete("/:id", (req, res) => {
    res.json({ message: req.params.id });
});

Router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "poste liké" });
});

module.exports = Router;
