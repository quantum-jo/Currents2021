const mongoose = require('mongoose');

const DB_connection = async () => {
    try {
        const connection = mongoose.connect(`mongodb://localhost:27017/currents2021`);
        console.log("connected to mongo db");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = DB_connection;
