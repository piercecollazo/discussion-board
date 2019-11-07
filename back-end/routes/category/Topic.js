const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let TopicSchema = mongoose.Schema({
    
    user_id: {type: mongoose.SchemaTypes.ObjectId, ref: "User"}, 
    category_id: {type: mongoose.SchemaTypes.ObjectId, ref: "Category"}, 
    
    title: { type: String, unique: true, required: true, default: ''},
    post: { type: String, default: ''},
    image: { type: String, default: ''},
    timestamp: {
        type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
      },

})

module.exports = mongoose.model('Topic', TopicSchema)