const Router = require('restify-router').Router;
const routerInstance = new Router();

const BaseController = require('./controllers/baseController');

routerInstance.get('/', BaseController.index);

module.exports = (server) => {
    routerInstance.applyRoutes(server);
};