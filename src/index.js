const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
});

router.get('/about', function(req, res) {
    res.sendfile(path.join(__dirname + '/about.html'));
});

router.get('/contact', function(req, res) {
    res.sendfile(path.join(__dirname + '/contact.html'));
});


app.use('/', router);
app.listen(process.env.port || 80);

console.log('Running at Port 80')