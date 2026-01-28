const Router = require('restify-router').Router;
const routerInstance = new Router();

// Controllers
const BaseController = require('./controllers/baseController');
const StorageBins = require('./controllers/storageBins');

routerInstance.get('/', BaseController.index);
routerInstance.get('/bins', StorageBins.getAllBins);
routerInstance.get('/bins/:id', StorageBins.getBinById);

module.exports = (server) => {
    routerInstance.applyRoutes(server);
};