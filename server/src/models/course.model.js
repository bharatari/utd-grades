// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const course = sequelizeClient.define('course', {
    description: {
      type: DataTypes.STRING,
    },
    number: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    prefix: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  course.associate = function (models) {
    course.hasMany(models.section);
  };

  return course;
};
