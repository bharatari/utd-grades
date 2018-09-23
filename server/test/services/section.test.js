const assert = require('assert');
const app = require('../../src/app');

describe('\'section\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/section');

    assert.ok(service, 'Registered the service');
  });
});
