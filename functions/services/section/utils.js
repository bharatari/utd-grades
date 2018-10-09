const AWS = require('aws-sdk');
const config = require('../../config/lambda');

const lambda = new AWS.Lambda({
  region: 'us-east-2',
});


module.exports = {
  async parseSearchStringIfExists(queryParams) {
    if (queryParams) {
      const search = queryParams['search'];

      if (search) {
        queryParams = await this.parseSearchString(search);
      }
    }

    return queryParams;
  },

  async parseSearchString(search) {
    const payload = {
      queryStringParameters: {
        search,
      },
    };

    const params = {
      FunctionName: config.parserLambda,
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(payload)
    };

    try {
      const response = await lambda.invoke(params).promise();
      const payload = JSON.parse(response.Payload);
      const body = JSON.parse(payload.body)

      return body;
    } catch (e) {
      throw e;
    }
  }
}
