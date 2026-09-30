'use strict';

const http = require('http');

function handler(req, res) {
    if (req.url === '/healthz' || req.url === '/ready') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('ok');
    }
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ app: 'cnp-test-node', lang: 'node', status: 'running' }));
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('not found');
}

function createServer() {
    return http.createServer(handler);
}

module.exports = { createServer };
