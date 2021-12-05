import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { Vpc } from "@aws-cdk/aws-ec2";
import { vpcProps } from "../lib/ec2/vpc-props";
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
import * as ssm from '@aws-cdk/aws-ssm';


export class baseStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    // create a vpc for the stack
    const coreVpc = new Vpc(this, id, vpcProps)    
    
    // Create a new SSM Parameter holding a String
    const param = new ssm.StringParameter(this, 'coreVpc', {
      // description: 'Some user-friendly description',
      // name: 'ParameterName',
      stringValue: 'Initial parameter value',
      // allowedPattern: '.*',
    });
    
  }
}
