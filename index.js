const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db = require('./api/util/keys').mongoURI;

const PORT = process.env.PORT || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(console.log('MongoDB Connected'))
    .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);

app.get('/', function(req, res) {
    res.json({message: "config up and running"});
});

app.get('/cart', function (req, res) {
    res.json({ message: "config up and running" });
});

app.listen(PORT, () => {
    console.log('working just fine');
});

