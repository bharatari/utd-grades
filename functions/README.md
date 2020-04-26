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

Commits to the `dev` branch will automatically trigger a deploy to the UTD Grades `development` environment, the url of which is automatically set when running the UTD Grades client in development. If you're making changes on your own branch, you will want to push the functions to a personal AWS account to test your work before being merged into the `dev` branch. Make sure you have your own AWS keys configured within your local environment. Then, deploy the functions to your personal AWS account with the following:

1. Change into the `functions` folder
    `cd functions`
2. Deploy functions under `development` stage
    ```bash
    serverless deploy
    ```

Serverless will output the resulting URL of the deployed API. Set this URL within the `base()` function in `client/utils/data.js` so that the client points to this API.

## Testing

We maintain a very simple set of tests focusing on ensuring modifications to our database calls, parsing and related logic never breaks existing functionality. Primarily, we test various queries for different courses, ensuring that we return what we expect and that we handle all known edge cases for course and section formats. When we find that a certain course or section does not work and fix it, we add it to the test suite to prevent regression. With so many people using UTD Grades with such a wide variety of courses they're looking for, there's a lot of room for changes to unexpectedly break things for certain sets of users. Larger issues are generally easy to catch simply by testing by hand or receiving overwhelming user feedback, however, our test suite is our way of doing our best to make sure we're never unknowingly breaking anything for a minority of users.

## Deployment

Commits to master will automatically trigger a deploy to production (assuming tests pass) through a GitHub Actions workflow. For a manual deploy, run `serverless deploy --stage production --aws-profile <set-aws-profile-pointing-to-production-here>` within the `functions` folder ensuring that you have the appropriate AWS profile configured in your local environment.
