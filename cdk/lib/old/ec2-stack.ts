/*
import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";
import { createEC2Instance } from "./ec2-constructs";
import { vpcProps } from "../ec2/vpc-props";

export class ec2Stack extends Stack {
    constructor(scope: Construct, id: string, peerCidrIp: string, az: string, keyName: string, props?: StackProps) {
      super(scope, id, props);

      // create an ec instance
      new createEC2Instance(this, 'ec2svr',
      peerCidrIp,
      az,
      keyName)    
    }
}
*/