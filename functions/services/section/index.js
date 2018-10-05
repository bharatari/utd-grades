const init = require('../../models');

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

    const section = await Section.findAll({
      where: {
        number: queryParams['sectionNumber'],
      },
      include: [
        {
          model: models.professor,
          where: {
            firstName: queryParams['professorFirstName'],
            lastName: queryParams['professorLastName'],
          },
        },
        {
          model: models.course,
          where: {
            number: queryParams['courseNumber'],
            prefix: queryParams['coursePrefix'],
          },
          include: [
            {
              model: models.semester,
              where: {
                year: queryParams['year'],
                type: queryParams['type'],
              },
            }
          ]
        },
      ],
    });

    return section;
  }
}

module.exports = Section;
