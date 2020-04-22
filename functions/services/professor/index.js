const init = require('../../models');
const _ = require('lodash');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

class ProfessorService {
  constructor(sequelize) {
    this.sequelize = init();
  }
  
  async get(id) {
    try {
      const models = this.sequelize.models;
      const Professor = models.professor;

      const professor = await Professor.findOne({
        where: {
          id,
        },
        include: [
          {
            model: models.course
          }
        ],
      });

      this.sequelize.close();

      return professor;
    } catch (e) {
      this.sequelize.close();

      throw e;
    }
  }

  async find(queryParams) {
    try {
      const models = this.sequelize.models;
      const Professor = models.professor;

      function professorWhere() {
        let where = {};

        if (!_.isNil(queryParams['firstName'])) {
          const firstName = queryParams['firstName'].trim();

          where.firstName = {
            [Op.iLike]: `%${firstName}%`
          };
        }

        if (!_.isNil(queryParams['lastName'])) {
          const lastName = queryParams['lastName'].trim();

          where.lastName = {
            [Op.iLike]: `%${lastName}%`
          };
        }

        return where;
      }

      const professors = await Professor.findAll({
        where: professorWhere()
      });

      this.sequelize.close();

      return professors;
    } catch (e) {
      this.sequelize.close();

      throw e;
    }
  }
}

module.exports = ProfessorService;
