const express = require('express');
const connect = require('./config/db');
let app = express();

// подключаем файлы маршрутов
const webRouter = require('./routes/web');
const errorsRouter = require('./routes/errors');

// удаляем заголовок x-powered-by
app.disable('x-powered-by');

// настройки приложения
app = require('./config/app');
const port = app.get('port');

// Инициализация маршрутов
app.use('/', webRouter);
app.use(errorsRouter[404]);
app.use(errorsRouter[500]);

app.listen(port, () => {
    console.log(`Express server http://localhost:${port}`);
});