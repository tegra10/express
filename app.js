const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/post", require("./routes/post.routes.js"));
app.listen(port, () =>
    console.log(`l'application est lancée sur le port ${port}`)
);
