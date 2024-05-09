const express = require("express");
const port = 3000;

const app = express();
app.use('/post', require('./backend/post.routes'))
app.listen(port, () => {
    console.log(`le servereur est lancé sur le port ${port}`);
});
