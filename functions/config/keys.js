const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {
  get(name) {
    const NODE_ENV = process.env.NODE_ENV;

    if (process.env[name]) {
      return process.env[name];
    } else if (NODE_ENV !== 'production') {
      const config = yaml.safeLoad(fs.readFileSync('./env.yml', 'utf8'));

      if (config[name]) {
        return config[name];
      }
    }

    return null;
  }
};
