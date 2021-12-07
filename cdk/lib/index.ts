import { CfnParameter, Construct, Stack, StackProps } from '@aws-cdk/core';
import { Vpc } from "@aws-cdk/aws-ec2";
import { vpcProps } from "../lib/vpc-utils";
import { createEC2 } from '../lib/ec2-constructs';
import { createUser, createReadOnlyUser, roManagedPol } from '../lib/iam-utils';
import { createBucket } from '../lib/s3-utils';

export class coreStack extends Stack {
  constructor(scope: Construct, id: string, peerCidrIp: string, keyName: string, props?: StackProps) {
    super(scope, id, props)

    // Create VPC & store VPC_id to SSM
    const coreVpc = new Vpc(this, id, vpcProps);

    // create an iam user with read-only permissions (2 methods)
    const user1 = createReadOnlyUser(this, 'iam-ro-user-001')
    const user2 = createUser(this,'iam-ro-user-002', { managedPolicies: [ roManagedPol ], })

    // create a s3 bucket that persists between cdk stack deploy/destroy
    const bucket1 = createBucket(this, 'pw-fn-persist1', { versioned: false })
    
    // Create EC2 Instance
    new createEC2(this, 'id', coreVpc, peerCidrIp, this.availabilityZones[0], keyName)



  }
}


    //const defaultVpc = Vpc.fromLookup(this, 'VPC', { isDefault: true })

    // interface ConsumerProps extends StackProps { userBucket: Vpc;}


    //    const dpVpc = ssm.StringParameter.valueForStringParameter(this, 'my-plain-parameter-name');    
    
    //this.myvpc = new coreVpc(this, 'VPC', vpcProps);
/*
export class coreConstructs extends Construct {
  constructor(scope: Construct, id: string, vpcProps: VpcProps) {
    super(scope, id)

  }
}

*/

/*

    //const dpVpc = new coreVpc(this, dpVpcId, vpcProps)
    // const dpVpc = Vpc.fromLookup(this, 'vpc', { vpcId: dpVpcId })

    const vpc = Vpc.fromLookup(this, 'Vpc', { isDefault: true });


    const dpVpc = ssm.StringParameter.valueForStringParameter(
      this, 'my-plain-parameter-name');    
    
    new Instance(this,
      'ec2svr',
      vpc,
      peerCidrIp,
      this.availabilityZones[0],
      keyName
    )

    // isDefault: true,
      // tags:{"type":"appDeploy"})
      //const dpCoreVpc = new CfnParameter(this, coreVpc, { })
*/