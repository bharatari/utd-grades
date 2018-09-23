// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const section = sequelizeClient.define('section', {
    number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    grades: {
      type: DataTypes.JSONB,
      allowNull: false,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  section.associate = function (models) {
    section.belongsTo(models.course);
    section.belongsTo(models.professor);
    section.belongsTo(models.semester);
  };

  return section;
};
