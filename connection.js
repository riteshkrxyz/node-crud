const mongoose = require('mongoose');

async function connectDB(url) {
    return mongoose.connect(url)
        .then(() => console.log("Mongodb connection established"))
        .catch((err) => console.log("error connecting to MongoDB", err));
}

module.exports = {
    connectDB,
}