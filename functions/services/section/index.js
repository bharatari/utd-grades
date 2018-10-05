const init = require('../../models');
const _ = require('lodash');

class Section {
  constructor(sequelize) {
    this.sequelize = init();
  }
  
  async get(id) {
    const models = this.sequelize.models;
    const Section = models.section;

    const section = await Section.findOne({
      where: {
        id,
      },
      include: [
        { model: models.professor },
        { model: models.course },
        { model: models.semester },
      ],
    });

    return section;
  }

  async find(queryParams) {
    const models = this.sequelize.models;
    const Section = models.section;

    function sectionWhere() {
      let where = {};

      if (!_.isNil(queryParams['sectionNumber'])) {
        where.number = queryParams['sectionNumber'];
      }

      return where;
    }

    function professorWhere() {
      let where = {};

      if (!_.isNil(queryParams['professorFirstName'])) {
        where.firstName = queryParams['professorFirstName'];
      }

      if (!_.isNil(queryParams['professorLastName'])) {
        where.lastName = queryParams['professorLastName'];
      }

      return where;
    }

    function courseWhere() {
      let where = {};

      if (!_.isNil(queryParams['courseNumber'])) {
        where.number = queryParams['courseNumber'];
      }

      if (!_.isNil(queryParams['coursePrefix'])) {
        where.prefix = queryParams['coursePrefix'];
      }
      
      return where;
    }

    function semesterWhere() {
      let where = {};

      if (!_.isNil(queryParams['year'])) {
        where.year = queryParams['year'];
      }

      if (!_.isNil(queryParams['type'])) {
        where.type = queryParams['type'];
      }

      return where;
    }

    const section = await Section.findAll({
      where: sectionWhere(),
      include: [
        {
          model: models.professor,
          where: professorWhere(),
        },
        {
          model: models.course,
          where: courseWhere(),
          include: [
            {
              model: models.semester,
              where: semesterWhere(),
            },
          ],
        },
      ],
    });

    return section;
  }
}

module.exports = Section;
