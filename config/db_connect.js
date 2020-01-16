var mongoose = require('mongoose');

//connect to mongodb
/* mongoose.connect('mongodb://localhost/taskmanagement', {
    useNewUrlParser: true
}); */
mongoose.connect('mongodb+srv://user:user123456@mongodbc-lfkub.mongodb.net/test2?retryWrites=true',{
  useNewUrlParser: true
});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', _ => {
    console.log('mongodb connected')
});
