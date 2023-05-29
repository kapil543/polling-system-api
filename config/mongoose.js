const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1/PollingSystemAPI');

const db = mongoose.connection;

db.on('error',console.log.bind(console,'error on connecting to the database'));
db.once('open', function(){
    console.log('successfully connected to the database...');
});