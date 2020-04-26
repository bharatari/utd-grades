const SectionService = require('../service');

module.exports = async (id, connection) => {
  try {
    const service = new SectionService(connection);

    return await service.get(id);
  } catch (e) {
    throw e;
  }
};
