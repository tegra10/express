const express = require("express");
const Router = express.Router();
const { setPosts } = require("../controllers/post.controller.js");

Router.get("/", (req, res) => {
    res.json({ message: "je suis la nouvelle data" });
});

Router.post("/",setPosts);

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
