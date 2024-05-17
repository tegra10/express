const postModel = require("../models/post.model.js");

module.exports.getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
    }
};

module.exports.setPosts = async (req, res) => {
    try {
        if (!req.body.message) {
            res.status(400).json({ message: "Merci d'ajouter un message" });
        }

        const post = await postModel.create({
            message: req.body.message,
            author: req.body.author
        });
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
    }
};

module.exports.editPosts = async (req, res) => {
    const post = await postModel.findById(req.params.id);
try{
  
    if (!post) {
        res.status(400).json({ message: "le message n'existe pas" });
    }
    const updatePost = await postModel.findByIdAndUpdate(post, req.body,{message:req.body.message}, {
        new: true
    });
    res.status(200).json(updatePost);
}catch(err){
  console.error(err)
}
};
