const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

let CategorySchema = mongoose.Schema({
    
      user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "User"}, 
      
      categoryName: { type: String, default: ''},

      topics: [{ type: mongoose.Schema.Types.ObjectId, ref:'Topic' }],


})

module.exports = mongoose.model('Category', CategorySchema)