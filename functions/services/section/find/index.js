const SectionService = require('../service');
const utils = require('./utils');

module.exports = async (queryParams, connection) => {
  try {
    let service = new SectionService(connection);

    const params = utils.parseSearchStringIfExists(queryParams);

    return await service.find(params);
  } catch (e) {
    throw e;
  }  
};
