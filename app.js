const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

handlebars.create({defaultLayout: 'main'});

app.disable('x-powered-by');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

const port = app.get('port');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404);
    res.render('errors/404', {layout: 'error'});
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500);
    res.render('errors/500', {layout: 'error'});
});

app.listen(app.get('port'), () => {
    console.log(`Express server http://localhost:${port}`);
});