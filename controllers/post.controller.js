const postModel = require("../models/post.model.js");


module.exports.setPosts =async (req,res)=>{
  if(!req.body.message){
    res.status(400).json({message:"Merci d'ajouter un message"})
  }
  
  const post = await postModel.create({message:req.body.message,
    author:req.body.author
  })
  res.status(201).json(post)
}

