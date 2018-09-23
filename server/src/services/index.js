const course = require('./course/course.service.js');
const professor = require('./professor/professor.service.js');
const section = require('./section/section.service.js');
const semester = require('./semester/semester.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(course);
  app.configure(professor);
  app.configure(section);
  app.configure(semester);
};
