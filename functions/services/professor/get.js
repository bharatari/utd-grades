const ProfessorService = require('./index');
const respond = require('../../utils/respond');

let connection;

module.exports.get = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (!connection) {
      connection = new Connection();
    }

    await connection.connect();

    let service = new ProfessorService(connection);
    let response = await service.get(event.pathParameters.id);

    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }
};
