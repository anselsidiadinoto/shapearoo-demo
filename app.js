const express = require('express');
const app = express();

// Static Files
app.use('/css', express.static(__dirname + '/src/css'));

// Templating Engine
app.set('views', './app/views');
app.set('view engine', 'ejs');

// Routes
const routes = require('./app/routes/router');
app.use('/', routes);

app.listen(3000, function () {
    console.log('server is up baby');
});

// ------------ TEMPLATES FOR OTHER STATIC FILES -----------------
// app.use('/js', express.static(__dirname + '/src/js'));
// app.use('/img', express.static(__dirname + '/public/img'));
