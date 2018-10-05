const Section = require('./index');
const respond = require('../../utils/respond');

module.exports.get = async (event) => {
  try {
    let service = new Section();
    let response = await service.get(event.path.id);

    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }
};
