var mongoose = require('mongoose');

var todolist = new mongoose.Schema({
    title:  String,
    isDone:Boolean,
});
module.exports = mongoose.model("todolist",todolist,"todolist");