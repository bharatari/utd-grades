const ProfessorService = require('./index');
const respond = require('../../utils/respond');

module.exports.get = async (event) => {
  try {
    let service = new ProfessorService();
    let response = await service.get(event.pathParameters.id);

    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }
};