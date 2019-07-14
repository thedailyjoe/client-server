const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({message: "config up and running"});
});


app.listen(5000, () => {
    console.log('working just fine');
});

