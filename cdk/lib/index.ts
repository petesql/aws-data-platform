import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { createUser, createGlueRole } from '../lib/iam/iam-functions';
import { ManagedPolicy } from '@aws-cdk/aws-iam'; // move to iam 
export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create test iam user
    const readonlyManagedPolicy = ManagedPolicy.fromAwsManagedPolicyName(
      'AmazonEC2ReadOnlyAccess',
    );
    const user1 = createUser(this,
      'iamUser001',
      { managedPolicies: [ readonlyManagedPolicy ] }
    )

    // Create iam new service role for glue
    const glueRole1 = createGlueRole(this, 'glueRole001') 
    // Add AWSGlueServiceRole to role.
    //const gluePolicy = iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSGlueServiceRole");
    //role.addManagedPolicy(gluePolicy);
    
  }
}
