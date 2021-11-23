import * as cdk from '@aws-cdk/core';
import * as iam from "@aws-cdk/aws-iam";
import { defaultS3Bucket } from './s3-stack';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const readonlyManagedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName(
      'AmazonEC2ReadOnlyAccess',
    );

    const user = new iam.User(this, 'testuser', {
      userName: 'pw-test-user-01',
      managedPolicies: [ 
        readonlyManagedPolicy,
      ]
    })

    new defaultS3Bucket(this, 'bucketname', 'pw-test-default-bucket-01')

  }
}
