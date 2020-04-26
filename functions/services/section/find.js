const Connection = require('../../models');
const SectionService = require('./index');
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

    let service = new SectionService(connection);

    let queryParams = event['queryStringParameters'];
    queryParams = await utils.parseSearchStringIfExists(queryParams);

    let response = await service.find(queryParams);
    
    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }  
};
