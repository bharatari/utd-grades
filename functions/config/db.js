const keys = require('./keys');

module.exports = {
  dbName: keys.get('DB_NAME'),
  dbUser: keys.get('DB_USER'),
  dbPass: keys.get('DB_PASS'),
  dbHost: keys.get('DB_HOST'),
};
