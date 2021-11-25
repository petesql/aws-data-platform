import * as core from "@aws-cdk/core";
import * as iam from '@aws-cdk/aws-iam';
import { User, UserProps } from "@aws-cdk/aws-iam";
import { iamUser } from '../iam/iam-constructs'

export class iamStack extends core.Stack {
  constructor(scope: core.Construct, id: string, props?: core.StackProps ) {
    super(scope, id, props);
    // create a new iam user
    new iamUser(this, 'd', 'iam-test-user-0002');
  }
}
