const ProfessorService = require('./index');
const respond = require('../../utils/respond');
const utils = require('./utils');

let connection;

module.exports.find = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    if (!connection) {
      connection = new Connection();
    }

    await connection.connect();

    let service = new ProfessorService(connection);

    let queryParams = event['queryStringParameters'];
    let response = await service.find(queryParams);
    
    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }  
};
