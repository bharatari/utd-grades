const keys = require('./keys');

module.exports = {
  dbName: keys.get('dbName'),
  dbUser: keys.get('dbUser'),
  dbPass: keys.get('dbPass'),
  dbHost: keys.get('dbHost'),
};
