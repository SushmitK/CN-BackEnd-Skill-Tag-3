const mongoose = require('mongoose');


//connect to DB
// u01hZm0Q16jaN5cD
mongoose.connect('mongodb+srv://katkalesushmit1189:u01hZm0Q16jaN5cD@cluster0.zkoz6ci.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});