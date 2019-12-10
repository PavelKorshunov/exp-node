const errors = {
    404: (req, res, next) => {
        res.status(404);
        res.render('errors/404', {layout: 'error'});
    },
    500: (err, req, res, next) => {
        console.log(err.stack);
        res.status(500);
        res.render('errors/500', {layout: 'error'});
    }
};

module.exports = errors;