const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (sequelize) {
  const course = sequelize.define('course', {
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
      },
    },
  });

  course.associate = function(models) {
    course.hasMany(models.section);
    course.belongsTo(models.semester);
  }

  return course;
}
