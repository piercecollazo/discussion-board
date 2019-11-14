const mongoose = require("mongoose");
const Schema = mongoose.Schema;  
const moment = require("moment");
const now = moment();

const PostSchema = new mongoose.Schema({
  topic_id: [{ type: mongoose.Schema.Types.ObjectId, ref:'Topic'}],
  user_id:{type:Schema.Types.ObjectId, ref:'User'},
  content: {type: 'String', default: ''},
  timestamp: {type: String, default: now.format("dddd, MMMM Do YYYY, h:mm:ss a")}
});


module.exports = mongoose.model("Post", PostSchema);
