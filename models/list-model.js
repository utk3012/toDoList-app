const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

var Lists = mongoose.model('List',listSchema);
module.exports = Lists;