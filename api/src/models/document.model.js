const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;