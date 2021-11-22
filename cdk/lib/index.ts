import * as cdk from '@aws-cdk/core';
import * as iam from "@aws-cdk/aws-iam";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const readonlyManagedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName(
      'AmazonEC2ReadOnlyAccess',
    );

    const user = new iam.User(this, 'iamUser', {
      userName: 'pw-test-user-1',
      managedPolicies: [ 
        readonlyManagedPolicy,
      ]
    })

  }
}
