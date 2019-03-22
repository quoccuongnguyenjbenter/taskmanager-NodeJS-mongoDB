var mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/taskmanagement', {
    useNewUrlParser: true
});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', _ => {
    console.log('mongodb connected')
});