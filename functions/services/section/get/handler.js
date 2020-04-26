const Connection = require('../../../models');
const respond = require('../../../utils/respond');
const get = require('./index');

let connection;

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (!connection) {
      connection = new Connection();
    }

    await connection.connect();

    const response = await get(event.pathParameters.id, connection);

    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }
};
