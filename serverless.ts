import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'service-name',

  provider: {
    name: 'aws',
    runtime: 'nodejs22.x',
    profile: 'default',
    region: 'us-east-1',
    stage: '${opt:stage, "dev"}',
    versionFunctions: false,
    endpointType: 'REGIONAL',
    environment: {
      SERVERLESS_REGION: '${self:provider.region}',
      SERVERLESS_STAGE: '${self:provider.stage}',
      SERVERLESS_SERVICE: '${self:service}',
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      usagePlan: {
        quota: {
          limit: 100000,
          offset: 0,
          period: 'MONTH',
        },
        throttle: {
          burstLimit: 200,
          rateLimit: 1000,
        },
      },
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'states:StartExecution',
              's3:*',
              'dynamodb:*',
              'rds:*',
              'secretsmanager:GetSecretValue',
              'events:PutEvents',
              'events:RemoveTargets',
              'lambda:InvokeFunction',
              'sqs:*',
            ],
            Resource: ['*'],
          },
        ],
      },
    },
  },
  package: {
    individually: true,
  },
  functions: {
    api: {
      handler: 'src/handlers/api.handler',
      timeout: 29,
      memorySize: 512,
      events: [
        { http: { path: '/', method: 'any', cors: true, private: true } },
        { http: { path: '/{proxy+}', method: 'any', cors: true, private: true } },
      ],
    },
  },

  plugins: ['serverless-offline'],
  custom: {
    esbuild: {
      bundle: true,
      sourcemap: true,
      minify: true,
      incremental: true,
      exclude: ['aws-sdk'],
      watch: {
        pattern: ['src/**/*.ts', 'src/**/*.js'],
        ignore: ['src/**/*.test.ts'],
      },
    },
  },
}

module.exports = serverlessConfiguration
