const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const Course = require('./Course');
const Professor = require('./Professor');
const Section = require('./Section');
const Semester = require('./Semester');

function init() {
  const sequelize = new Sequelize(`postgres://${dbConfig.dbUser}:${dbConfig.dbPass}@${dbConfig.dbHost}/${dbConfig.dbName}`, {
    logging: false,
  });

  Course(sequelize);
  Professor(sequelize);
  Section(sequelize);
  Semester(sequelize);

  // Apply associations
  const models = sequelize.models;

  Object.keys(models).forEach(name => {
    if ('associate' in models[name]) {
      models[name].associate(models);
    }
  });

  // Sync to the database
  sequelize.sync();

  return sequelize;
}

module.exports = init;
