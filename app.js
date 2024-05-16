const express = require("express");
require('dotenv').config()
const connecDB = require('./config/db.js')
const app = express();
connecDB()
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/post", require("./routes/post.routes.js"));
app.listen(port, () =>
    console.log(`l'application est lancée sur le port ${port}`)
);
