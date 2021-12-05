# aws-data-platform
My AWS CDK (Typescript) Data Platform.

This project builds AWS infra using CDK Stacks for each component required.

Dev example:
    - Spawn a new Windows 2019 EC2 Instance
        - Add new IAM Role for EC2 Host in IAM Stack `cdk/lib/iam/iam-stack.ts`.
        - Deploy the IAM Stack `make deploy iam-stack`.
        - Add new EC2 Instance in EC2 Stack `cdk/lib/ec2/ec2-stack.ts` using the `createEC2Instance` CDK construct.
        - Deploy the EC2 Stack `make deploy ec2-stack`.

-- 

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



// npm run-script cdk-synth --prefix cdk/
