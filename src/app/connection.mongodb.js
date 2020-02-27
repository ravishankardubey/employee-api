const mongoose = require("mongoose");
const MONGODB_CONFIG = require('./config/mongodb.config');

function connectMongoDB() {
    const MONGO_ENDPOINT = 'mongodb://' + MONGODB_CONFIG['DB_URL'] + ":" + MONGODB_CONFIG['PORT'] + "/" + MONGODB_CONFIG['DB_NAME'];
    const connect = mongoose.connect(MONGO_ENDPOINT);
    connect.then((db) => {
        console.log('Connected to server : [ ' + MONGO_ENDPOINT + ' ]');
    }, (err) => {
        console.log(err)
    });
}

module.exports = connectMongoDB;