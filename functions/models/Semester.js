const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (sequelize) {
  const semester = sequelize.define('semester', {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('fall', 'spring', 'summer'),
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
    },
    getterMethods: {
      name() {
        const capitalizedYear = this.year.charAt(0).toUpperCase() + this.year.slice(1);

        return `${this.year} ${capitalizedYear}`;
      },
    },
  });

  semester.associate = function(models) {

  }

  return semester;
}
