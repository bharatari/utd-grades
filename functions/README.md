# UTD Grades Functions

A backend consisting of Node.js-based AWS Lambda functions built using the Serverless Framework.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
3. Install Serverless Framework globally
    ```bash
    npm install -g serverless
    ```
2. Change into the `functions` folder
    ```bash
    cd functions
    ```

2. Install dependencies
    
    ```bash
    npm install
    ```
3. Start the offline server
    
    ```bash
    serverless offline
    ```

Access the server at [http://localhost:4000](http://localhost:4000).

This will run functions locally in a simulated AWS Lambda environment using your locally installed Node runtime. This is great for being able to quickly iterate on your changes but is not a substitute for running within the full AWS Lambda environment.

At some point, you will want to push the functions to AWS Lambda and test them there. To do this, deploy the functions to AWS Lambda under a `development` stage with the following:

1. Deploy functions under `development` stage
    ```bash
    serverless deploy
    ```

Serverless will output the resulting URL of the deployed API.

Keep in mind that if multiple people are developing under the same AWS account, deploying to the `development` stage will overwrite any previous deploy under the `development` stage. If different people are working on different features at the same time, this will be disruptive. To avoid this, have each collaborator use a different AWS account for development purposes.

## Deployment

Run `serverless deploy --stage production` within the `functions` folder ensuring that you have an AWS profile called `utd-grades` (with the appropriate AWS account access key and secret pointing to the correct production account) setup on your local machine.
