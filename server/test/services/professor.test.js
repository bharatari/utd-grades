const assert = require('assert');
const app = require('../../src/app');

describe('\'professor\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/professor');

    assert.ok(service, 'Registered the service');
  });
});
