const mongoose = require('mongoose');
const moment = require("moment");
const now = moment();

// let CategorySchema = mongoose.Schema({
    
//       user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "user"}, 
//       politics: { type: String , ref: "topic", unique: true, required: true,default: ''},
//       sports: { type: String, ref: "topic", unique: true, required: true,  default: ''},
//       veterans: { type: String, ref: "topic", unique: true, required: true, default: '' },
//       timestamp: {
//         type: String, default: now.format("dddd, MMMM Do YYYY, kk:mm:ss")
//       }


// })

let CategorySchema = mongoose.Schema({
    name: { type: String, default: ''},
    topics: { type: mongoose.SchemaType.ObjectId, ref: 'topic'}
})

module.exports = mongoose.model('Category', CategorySchema)