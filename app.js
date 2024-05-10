const express = require("express");
const port = 3000;
const app = express();

//les middleware
// app.use(express.json());
// app.use(express.urleconded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//les routes
app.use("/post", require("./routes/post.routes"));
app.listen(port, () => {
    console.log(`le servereur est lancé sur le port ${port}`);
});
