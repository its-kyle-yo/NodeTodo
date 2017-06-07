var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var ToDos = mongoose.model('Todos', todoSchema);
module.exports = Todos;
