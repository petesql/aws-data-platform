import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";
import { vpcProps } from "./vpc-props";
import { createEC2Instance } from "./ec2-constructs";

export class ec2Stack extends Stack {
    // createVpc(scope: Construct) { return new Vpc(scope, 'VPC', vpcProps);
    constructor(scope: Construct, id: string, peerCidrIp: string, keyName: string, props?: StackProps) {
      super(scope, id, props);
      
      // create a vpc for the stack
      const coreVpc = new Vpc(this, 'vpc', vpcProps);

      // create an ec instance
      new createEC2Instance(this, 'ec2svr',
      coreVpc,
      peerCidrIp,
      this.availabilityZones[0],
      keyName);
    
    }
}
