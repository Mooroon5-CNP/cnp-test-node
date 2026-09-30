'use strict';

const { createServer } = require('./app');

const port = parseInt(process.env.PORT, 10) || 8080;
createServer().listen(port, () => {
    console.log(`cnp-test-node listening on ${port}`);
});
