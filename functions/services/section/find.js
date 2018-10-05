const Section = require('./index');
const respond = require('../../utils/respond');

module.exports.find = async (event) => {
  try {
    let service = new Section();
    let response = await service.find(event['queryStringParameters']);
    
    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }  
};
