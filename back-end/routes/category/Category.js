const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let CategorySchema = mongoose.Schema({
    
      user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "user"}, 
      name: { type: String, default: ''},
      topic: { type: mongoose.SchemaTypes.ObjectId, ref: 'topic'}


})

module.exports = mongoose.model('Category', CategorySchema)