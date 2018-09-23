// Initializes the `section` service on path `/api/section`
const createService = require('feathers-sequelize');
const createModel = require('../../models/section.model');
const hooks = require('./section.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/section', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/section');

  service.hooks(hooks);
};
