const Courses = require('../models/Courses');
const db = require('./db');
const config = require('../config');
const respond = require('../utils/respond');

let courses = new Courses(db, config.coursesTableName);

module.exports.find = async (event) => {
  try {
    let response = await courses.find(event['queryStringParameters']);
    
    return respond.success(response);
  } catch (e) {
    return respond.error(e);
  }  
};
