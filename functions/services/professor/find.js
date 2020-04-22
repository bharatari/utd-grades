const SectionService = require('./index');
const respond = require('../../utils/respond');
const utils = require('./utils');

module.exports.find = async (event) => {
  try {
    let service = new SectionService();

    let queryParams = event['queryStringParameters'];
    queryParams = await utils.parseSearchStringIfExists(queryParams);

    let response = await service.find(queryParams);
    
    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }  
};
