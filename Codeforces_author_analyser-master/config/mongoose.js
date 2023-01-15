const mongoose = require('mongoose');
const axios = require('axios');

var port = process.env.PORT || 8080;

var pref = "";
if (port == 8080) {
    pref = "http://localhost:8080/createDatabase"
} else {
    pref = `https://codeforce-author-analyser.herokuapp.com:34542/createDatabase`
}

mongoose.connect('mongodb+srv://HimanShu09:8iVS0LKM8HJVt2zf@cluster0.ttwau.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', async() => {
    console.log('Connected to MongoDB successfully');
    await axios.get(pref);
    console.log('created Database');
});

module.exports = db;