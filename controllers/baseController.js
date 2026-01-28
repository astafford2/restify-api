module.exports = {
    index(req, res, next) {
        res.json(200, 'Hello World!');
        next();
    }
};