// Initializes the `professor` service on path `/api/professor`
const createService = require('feathers-sequelize');
const createModel = require('../../models/professor.model');
const hooks = require('./professor.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/professor', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/professor');

  service.hooks(hooks);
};
