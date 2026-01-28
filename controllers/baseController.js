module.exports = {
    index(req, res, next) {
        res.json(200, 'Connected to restify backend API!');
        next();
    }
};