# TS-Serverless Boilerplate

This project serves as a boilerplate for building serverless applications using TypeScript. It provides a structured foundation to quickly develop, test, and deploy serverless APIs.

## Purpose

The TS-Serverless Boilerplate is designed to:

- Simplify the setup for serverless projects.
- Provide a clean and scalable architecture.
- Enable rapid development with TypeScript.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [AWS CLI](https://aws.amazon.com/cli/) (for deployment)

### Installation

1. Clone the repository

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running Locally

To start the serverless application locally:

```bash
npm run dev
```

This will use the `serverless-offline` plugin to emulate the AWS Lambda environment locally.

### Deploying

To deploy the application to AWS:

1. Ensure your AWS credentials are configured. You can specify the profile to use in `serverless.ts`
2. Run the deployment command:

```bash
npm run deploy
```

To deploy to production:

```bash
npm run deploy-prod
```

And if you'd like to create new stages, specify the stage in the command:

```bash
npm run deploy -s <your-stage>
```

### Modifying the API

1. Add or modify API endpoints in the `src/api` directory.
2. No update is necessary to `serverless.yml` because the API handler handles all request to / and /proxy+.
3. Test your changes locally using:

## Contributing

Feel free to fork this repository and submit pull requests to improve the boilerplate.

## License

This project is licensed under the MIT License.
