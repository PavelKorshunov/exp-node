const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();

// Корневая папка проекта
const projectDir = path.dirname(__dirname);

// настройка шаблонизатора для видов
handlebars.create({defaultLayout: 'main'});
app.set('views', path.join(projectDir, 'views'));
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

// установка порта
app.set('port', process.env.PORT || 3000);

// установка для статических файлов
app.use(express.static(path.join(projectDir, 'public')));

module.exports = app;