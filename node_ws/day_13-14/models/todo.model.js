const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoDBSchema = new Schema({
    id: Number,
    text: String,
    isComplete: Boolean
});
const TodoModel = mongoose.model("TodoModel", todoDBSchema);
module.exports = { TodoModel };
