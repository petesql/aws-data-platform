import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { createUser, createReadOnlyUser, roManagedPol } from '../lib/iam/iam-utils';
import { createBucket } from '../lib/s3/s3-utils';
import { redshiftCluster } from './redshift/redshift-constructs';
import { Vpc } from '@aws-cdk/aws-ec2';
import { createEC2Instance } from '../lib/ec2/ec2-constructs';
import { vpcProps } from '../lib/ec2/vpc-props';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // create a vpc for the stack
    const coreVpc = new Vpc(this, 'vpc', vpcProps);

    // create an ec instance
    /*
    new createEC2Instance(this, 'ec2svr',
      coreVpc,
      '10.10.10.0/24',
      this.availabilityZones[0],
      'pw_key_pair');
    */

    // create an iam user with read-only permissions (2 methods)
    const user1 = createReadOnlyUser(this, 'iam-ro-user-001')
    const user2 = createUser(this,'iam-ro-user-002', { managedPolicies: [ roManagedPol ], })

    // create a s3 bucket that persists between cdk stack deploy/destroy
    createBucket(this, 'pw-fn-persist1', {
      versioned: false,
      // removalPolicy: core.RemovalPolicy.DESTROY,
    })

  }
}
