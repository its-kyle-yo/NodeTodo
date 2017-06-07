var ToDos = require('../models/todoModel');
module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        var starterTodos = [
            {
                username: 'test',
                todo: 'something',
                isDone: false,
                hasAttachment: false,
            },
            {
                username: 'test',
                todo: 'nothing',
                isDone: true,
                hasAttachment: false,
            },
            {
                username: 'test',
                todo: 'learn node',
                isDone: true,
                hasAttachment: false,
            },
        ];
        
        ToDos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
};
