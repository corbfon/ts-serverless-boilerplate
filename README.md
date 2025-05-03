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

1. Clone the repository:

```bash
git clone https://github.com/your-repo/ts-serverless-boilerplate.git
cd ts-serverless-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running Locally

To start the serverless application locally:

```bash
npm run start
# or
yarn start
```

This will use the `serverless-offline` plugin to emulate the AWS Lambda environment locally.

### Deploying

To deploy the application to AWS:

1. Ensure your AWS credentials are configured.
2. Run the deployment command:

```bash
npm run deploy
# or
yarn deploy
```

### Modifying the API

1. Add or modify API endpoints in the `src/handlers` directory.
2. Update the `serverless.yml` file to define new functions and their triggers.
3. Test your changes locally using:

```bash
npm run start
# or
yarn start
```

## Folder Structure

- `src/` - Contains the source code for your Lambda functions.
- `serverless.yml` - Configuration file for the Serverless Framework.
- `tests/` - Contains unit and integration tests.

## Contributing

Feel free to fork this repository and submit pull requests to improve the boilerplate.

## License

This project is licensed under the MIT License.
