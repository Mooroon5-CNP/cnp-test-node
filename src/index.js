'use strict';

const { createServer } = require('./app');
const { logger } = require('./logger');

const port = parseInt(process.env.PORT, 10) || 8080;
createServer().listen(port, () => {
    logger.info('cnp-test-node listening', { port });
});
