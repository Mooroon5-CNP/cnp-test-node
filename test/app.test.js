'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/app');

function get(server, path) {
    const { port } = server.address();
    return fetch(`http://127.0.0.1:${port}${path}`);
}

test('health and root endpoints', async () => {
    const server = createServer().listen(0);
    try {
        assert.strictEqual((await get(server, '/healthz')).status, 200);
        assert.strictEqual((await get(server, '/ready')).status, 200);
        const body = await (await get(server, '/')).json();
        assert.strictEqual(body.app, 'cnp-test-node');
        assert.strictEqual((await get(server, '/nope')).status, 404);
    } finally {
        server.close();
    }
});
