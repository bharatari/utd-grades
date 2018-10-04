const Courses = require('../models/Courses');
const db = require('./db');
const config = require('../config');
const respond = require('../utils/respond');

let courses = new Courses(db, config.coursesTableName);

module.exports.get = async (event) => {
  try {
    let response = await courses.get(event.path.id);

    return respond.success(response.Item);
  } catch (e) {
    return respond.error(e);
  }
};
