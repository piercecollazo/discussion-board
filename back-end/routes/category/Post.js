const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let PostSchema = mongoose.Schema({
    
    user_id: {type: mongoose.SchemaTypes.ObjectId, ref: "User"}, 
    title:{type: String, default:''},
    post: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Post'}],
    image: { type: String, default: ''},
    timestamp: {
        type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
      },

})

module.exports = mongoose.model('Post', PostSchema)