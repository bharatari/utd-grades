const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (sequelize) {
  const section = sequelize.define('section', {
    number: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    grades: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
  });

  section.associate = function(models) {
    section.belongsTo(models.course);
    section.belongsTo(models.professor);
  }

  return section;
}
