const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    title: {
        Type: String,
        required: true
    },
    authors: {
        Type: String,
        required: true
    },
    description: String,
    image: String,
    link: String
})

const googlebooks = mongoose.model("googlebooks", book);

module.exports = googlebooks;