const fs = require('fs');

module.exports = {
  get(name) {
    const NODE_ENV = process.env.NODE_ENV;

    if (process.env[name]) {
      return process.env[name];
    } else if (NODE_ENV !== 'production') {
      const config = JSON.parse(fs.readFileSync('./env.json', 'utf8'));

      if (config[name]) {
        return config[name];
      }
    }

    return null;
  }
};
