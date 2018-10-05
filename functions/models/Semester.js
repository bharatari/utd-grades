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
        const capitalizedType = this.type.charAt(0).toUpperCase() + this.type.slice(1);

        return `${this.year} ${capitalizedType}`;
      },
    },
  });

  semester.associate = function(models) {

  }

  return semester;
}
