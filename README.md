# UTD Grades

UTD Grades is a tool to view grade distributions at UT Dallas. 

## Components

This monorepo consists of 4 sub-projects. The `client` folder contains the project's front-end built on React and Redux while the `functions` folder contains the project's backend code built as Node.js AWS Lambda functions with the serverless framework. In the `loader` folder is a data loading script that loads a JSON file of grade distributions data into DynamoDB. The project also holds a Feathers.js-based traditional server in the `server` folder which is currently unused.

