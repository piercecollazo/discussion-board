const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let CategoryGeneralSchema = mongoose.Schema({
    
      user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "user"}, 

      general: { type: String, ref: "topic", unique: true, required: true, default: '' },

      timestamp: { type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss") }


})

module.exports = mongoose.model('CategoryGeneral', CategoryGeneralSchema)