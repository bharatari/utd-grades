const init = require('../../models');
const _ = require('lodash');

class Section {
  constructor(sequelize) {
    this.sequelize = init();
  }
  
  async get(id) {
    try {
      const models = this.sequelize.models;
      const Section = models.section;

      const section = await Section.findOne({
        where: {
          id,
        },
        include: [
          {
            model: models.professor
          },
          {
            model: models.course,
            include: [
              { model: models.semester },
            ],
          },
        ],
      });

      this.sequelize.close();

      return section;
    } catch (e) {
      this.sequelize.close();

      throw e;
    }
  }

  async find(queryParams) {
    try {
      const models = this.sequelize.models;
      const Section = models.section;

      function sectionWhere() {
        let where = {};

        if (!_.isNil(queryParams['sectionNumber'])) {
          where.number = queryParams['sectionNumber'].trim();
        }

        return where;
      }

      function professorWhere() {
        let where = {};

        if (!_.isNil(queryParams['professorFirstName'])) {
          where.firstName = queryParams['professorFirstName'].trim();
        }

        if (!_.isNil(queryParams['professorLastName'])) {
          where.lastName = queryParams['professorLastName'].trim();
        }

        return where;
      }

      function courseWhere() {
        let where = {};

        if (!_.isNil(queryParams['courseNumber'])) {
          where.number = queryParams['courseNumber'].trim();
        }

        if (!_.isNil(queryParams['coursePrefix'])) {
          where.prefix = queryParams['coursePrefix'].toUpperCase().trim();
        }
        
        return where;
      }

      function semesterWhere() {
        let where = {};

        if (!_.isNil(queryParams['year'])) {
          where.year = queryParams['year'].trim();
        }

        if (!_.isNil(queryParams['type'])) {
          where.type = queryParams['type'].toLowerCase().trim();
        }

        return where;
      }

      const sections = await Section.findAll({
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

      this.sequelize.close();

      return sections;
    } catch (e) {
      this.sequelize.close();

      throw e;
    }
  }
}

module.exports = Section;
