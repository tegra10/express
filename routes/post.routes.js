const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
    res.json({ message: "data" });
});

Router.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: req.body.message });
});
Router.put("/:id", (req, res) => {
    res.json({ messageId: req.params.id });
});
Router.delete("/:id", (req, res) => {
    res.json({ messageId: `le compte lié à l'id ${req.params.id} a bien été supprimé` });
});

module.exports = Router;
