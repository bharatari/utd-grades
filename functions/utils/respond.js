const errors = require('./errors');

module.exports = {
  success(data) {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  },
  created(data) {

  },
  badRequest(e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e.message)
    };
  },
  error(e) {
    if (e instanceof errors.BadRequest) {
      return this.badRequest(e)
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify(e.message)
      };
    }
  },
  notFound(data) {

  }
};
