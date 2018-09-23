class Courses {
  constructor(db, table) {
    this.db = db;
    this.table = table;
  }
  
  async get(id) {
    const params = {
      TableName: this.table,
      Key: {
        "id": id,
      },
    };

    const course = await this.db.get(params).promise();

    return course;
  }

  async find(queryParams) {
    const params = {
      TableName : this.table,
      FilterExpression: '#number = :number and #prefix = :prefix',
      ExpressionAttributeNames:{
        '#number': 'number',
        '#prefix': 'prefix',
      },
      ExpressionAttributeValues: {
        ':number': queryParams['number'],
        ':prefix': queryParams['prefix'],
      }
    };

    const courses = await this.db.scan(params).promise();

    return courses;
  }
}

module.exports = Courses;
