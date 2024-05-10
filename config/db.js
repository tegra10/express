const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connecté à la base de données");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
