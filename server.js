const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/float', function(err, res) {
    res.sendFile(path.resolve(__dirname + '/public/html/float/float.html'));
});

app.get('/grid', function(err, res) {
    res.sendFile(path.resolve(__dirname + '/public/html/grid/grid.html'));
});

app.get('*', function(err, res) {
    res.sendFile(path.resolve(__dirname + '/public/html/inline-block/inline-block.html'));
});

app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    }
    console.log(`App listening on port: ${PORT}`);
});