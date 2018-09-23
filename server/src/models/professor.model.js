// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const professor = sequelizeClient.define('professor', {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    middleInitial: {
      type: DataTypes.TEXT,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  professor.associate = function (models) {
    professor.hasMany(models.section);
  };

  return professor;
};
