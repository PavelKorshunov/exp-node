const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});;
const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

const port = app.get('port');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res) => {
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log(`Express server http://localhost:${port}`);
});