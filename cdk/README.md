# CDK (TypeScript)
`/cdk/bin/` CDK App
`/cdk/lib/` CDK Stacks & Constructs
`/cdk/test/` CDK Unit Tests

## CDK Stacks
* Core (VPC) Stack - `make deploy base-stack`
    (/cdk/lib/index.ts) Create a VPC for the stack.
* IAM Stack - `make deploy iam-stack`
    (/cdk/lib/iam/) Create IAM Users & Roles.
* S3 Stack - `make deploy s3-stack`
    (/cdk/lib/s3/) Create S3 Buckets.
* EC2 Stack - `make deploy ec2-stack`
    (/cdk/lib/ec2/) Create EC2 Instances.
        Requires: VPC Stack & IAM Stack
* Redshift Stack - `make deploy redshift-stack`
    (/cdk/lib/redshift/) Create Redshift Clusters.
        Requires: VPC Stack & IAM Stack
* RDS Stack - `make deploy rds-stack`
    (/cdk/lib/rds/) Create RDS Instances.
        Requires: VPC Stack & IAM Stack

## Useful CDK Notes & Commands
The `cdk.json` file tells the CDK Toolkit how to execute your app.
 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

