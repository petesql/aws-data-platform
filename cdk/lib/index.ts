import * as cdk from '@aws-cdk/core';
import * as iam from "@aws-cdk/aws-iam";
import { defaultS3Bucket } from './s3-stack';
import { createBucket } from '../lib/s3-utils';
import { createRole } from '../lib/iam-stack';

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

    createRole(this,
      'new-test-role'
    )

    // create s3 buckets (using utils function)
    // this bucket will have the default config
    createBucket(this, 
      'pw-fn-default', //shows as enabled
    ) // buckets and objects are not public

    // create a s3 bucket that persists between cdk stack deploy/destroy
    createBucket(this, 
      'pw-fn-persist',
      {
        versioned: false,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      }
    )

  }
}




