require('dotenv').config();
const restify = require('restify');

// Initialize server
const server = restify.createServer({
    // certificate: '', // used when creating https server
    // key: '', // used when creating https server
    ignoreTrailingSlash: true
});

// Middleware
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonBodyParser({mapParams: true}));
server.use(restify.plugins.queryParser({mapParams: true}));

// Start Server / Require Routes
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    require('./routes')(server);
    console.log(`Server ${server.name} listening at ${server.url}`);

});