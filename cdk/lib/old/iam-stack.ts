/*
import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { createUser, createReadOnlyUser, roManagedPol } from '../iam/iam-utils';

export class iamStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
      
      // create an iam user with read-only permissions (2 methods)
      const user1 = createReadOnlyUser(this, 'iam-ro-user-001')
      const user2 = createUser(this,'iam-ro-user-002', { managedPolicies: [ roManagedPol ], })
    
    }
}
*/