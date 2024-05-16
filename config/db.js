const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strict", false);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connecté à la base de données");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
