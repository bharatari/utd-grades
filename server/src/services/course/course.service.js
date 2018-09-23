// Initializes the `course` service on path `/api/course`
const createService = require('feathers-sequelize');
const createModel = require('../../models/course.model');
const hooks = require('./course.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/course', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/course');

  service.hooks(hooks);
};
