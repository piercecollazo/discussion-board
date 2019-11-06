const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let CategorySchema = mongoose.Schema({
    
      user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "user"}, 
      politics: { type: mongoose.SchemaTypes.ObjectId, ref: "politics"}, 
      sports: { type: mongoose.SchemaTypes.ObjectId, ref: "sports"}, 
      general: { type: mongoose.SchemaTypes.ObjectId, ref: "genral"}, 
      timestamp: { type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss") }

})

module.exports = mongoose.model('Category', CategorySchema)