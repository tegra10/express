const express = require("express");
const Router = express.Router();
const { setPosts, getPosts, editPosts} = require("../controllers/post.controller.js");

Router.get("/", getPosts);

Router.post("/",setPosts);

Router.put("/:id",editPosts);

Router.delete("/:id", (req, res) => {
    res.json({ message: req.params.id });
});

Router.patch("/like-post/:id", (req, res) => {
    res.json({ message: "poste liké" });
});

module.exports = Router;
