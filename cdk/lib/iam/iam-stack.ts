import * as core from "@aws-cdk/core";
import * as iam from '@aws-cdk/aws-iam';
import { User, UserProps } from "@aws-cdk/aws-iam";
import { iamUser } from '../iam/iam-constructs'
import { createUser, createRole } from '../iam/iam-functions';

export class iamStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps ) {
    super(scope, id, props);
    // create a new iam user
    new iamUser(this, 'd', 'iam-test-user-0002');

    const readonlyManagedPolicy = iam.ManagedPolicy.fromAwsManagedPolicyName(
      'AmazonEC2ReadOnlyAccess',
    );

    const user = new iam.User(this, 'testuser1', {
      userName: 'pw-test-user-011',
      managedPolicies: [ 
        readonlyManagedPolicy,
      ]
    })
    
    createUser(this,
      'new-test-user-with-ro-pol1', {
        managedPolicies: [ readonlyManagedPolicy, ]
      })
    
      createRole(this,
        'new-test-role1',
      )
    
  }
}

