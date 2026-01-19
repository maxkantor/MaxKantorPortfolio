import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ses from 'aws-cdk-lib/aws-ses';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fromEmail = new cdk.CfnParameter(this, 'SesFromEmail', {
      type: 'String',
      description: 'Verified SES sender email address.',
      default: '',
    });

    const toEmail = new cdk.CfnParameter(this, 'SesToEmail', {
      type: 'String',
      description: 'Recipient email address.',
      default: 'mykantor@bellsouth.net',
    });

    const allowedOrigins = new cdk.CfnParameter(this, 'AllowedOrigins', {
      type: 'String',
      description: 'Comma-separated list of allowed origins for CORS.',
      default: 'http://localhost:5173',
    });

    const shouldCreateIdentity = new cdk.CfnCondition(this, 'CreateSesIdentity', {
      expression: cdk.Fn.conditionNot(
        cdk.Fn.conditionEquals(fromEmail.valueAsString, '')
      ),
    });

    const sesIdentity = new ses.CfnEmailIdentity(this, 'SesEmailIdentity', {
      emailIdentity: fromEmail.valueAsString,
    });
    sesIdentity.cfnOptions.condition = shouldCreateIdentity;

    const contactFunction = new lambda.Function(this, 'ContactSesFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('../../backend/contact-ses'),
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: {
        SES_FROM_EMAIL: fromEmail.valueAsString,
        SES_TO_EMAIL: toEmail.valueAsString,
        ALLOWED_ORIGINS: allowedOrigins.valueAsString,
      },
    });

    contactFunction.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*'],
      })
    );

    const httpApi = new apigwv2.HttpApi(this, 'ContactHttpApi', {
      corsPreflight: {
        allowHeaders: ['Content-Type'],
        allowMethods: [apigwv2.CorsHttpMethod.POST, apigwv2.CorsHttpMethod.OPTIONS],
        allowOrigins: allowedOrigins.valueAsString.split(',').map((o) => o.trim()),
      },
    });

    httpApi.addRoutes({
      path: '/contact',
      methods: [apigwv2.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration(
        'ContactLambdaIntegration',
        contactFunction
      ),
    });

    new cdk.CfnOutput(this, 'ContactApiUrl', {
      value: httpApi.apiEndpoint,
    });
  }
}
