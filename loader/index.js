require('dotenv').config()

const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-2',
});

async function run() {
  const client = new AWS.DynamoDB.DocumentClient();

  let content = JSON.parse(fs.readFileSync('data/complete.json', 'utf8'));

  for (let i = 0; i < content.length; i++) {
    const id = `${content[i].term}:${content[i].subj}${content[i].num}.${content[i].sect}`;
    
    content[i].id = id;

    const item = content[i];

    const params = {
      TableName: 'utd_grades_courses',
      Item: {
          'id':  item.id,
          'semester': item.term,
          'professor': item.prof,
          'prefix': item.subj,
          'number': item.num,
          'section': item.sect,
          'grades': item.grades
      }
    };
    
    client.put(params, function(err, data) {
      if (err) {
        console.error('Unable to add', JSON.stringify(err, null, 2));
      } else {
        console.log('PutItem succeeded:', item.id);
      }
    });
  }
}

run()
