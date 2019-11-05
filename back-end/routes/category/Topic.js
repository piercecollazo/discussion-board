const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let TopicSchema = mongoose.Schema({
    post: { type: Array, default: ''},
    user_id: {
    type: mongoose.SchemaTypes.ObjectId, ref: "user"}, 
    title: { type: String, unique: true, required: true, default: ''},
    timestamp: {
        type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
      },

})

module.exports = mongoose.model('Topic', TopicSchema)