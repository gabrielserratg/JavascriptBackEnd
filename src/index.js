const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendfile('index.html')
})

console.log("iniciado..")
app.listen(80)