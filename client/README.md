# UTD Grades Client

A React.js client built using Next.js and styled-components.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Change into the `client` folder
    ```bash
    cd client
    ```
2. Install dependencies
    
    ```bash
    npm install
    ```
3. Start the app
    
    ```bash
    npm run dev
    ```

Access the client at [http://localhost:3000](http://localhost:3000). The app will hot reload as you make changes.

## Deployment

Our current deployment strategy consists of building the client as static site and deploying the built assets onto a dedicated S3 bucket. 

As our client currently does not make use of any server-side rendering features such as Next.js's `getInitialProps` function, we can use the standard build procedure rather than having to use the `next export` command.

1. Run `npm run build` or `next build`
2. Copy the built assets onto S3 bucket (or any static site host)
