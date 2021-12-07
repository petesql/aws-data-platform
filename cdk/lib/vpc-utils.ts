import { Vpc, SubnetType, VpcProps } from '@aws-cdk/aws-ec2';
import { CfnOutput, CfnParameter, Construct } from '@aws-cdk/core';
import { StringParameter } from '@aws-cdk/aws-ssm';

// create a vpc for the stack
const vpcProps = {
    cidr: "10.0.0.0/16",
    natGateways: 1,
    subnetConfiguration: [
        {
            name: "publicSubnet1",
            subnetType: SubnetType.PUBLIC,
            cidrMask: 28
        },
    ],
};
export { vpcProps };

export class coreVpc extends Construct {
  readonly vpc: Vpc;
    constructor(scope: Construct, id: string, vpcProps: VpcProps) {
      super(scope, id)
  
      // Create a new VPC based on passed parameters
      this.vpc = new Vpc(this, id, vpcProps);
  
      // Create a new SSM Parameter for the VPC id Value
      const ssmVpcId = id+'-ssm-param'
      new StringParameter(this, ssmVpcId, {
        parameterName: ssmVpcId,
        stringValue: id,
      });

      //new CfnOutput(this, 'dpVpc1', { dpVpc1:Vpc } )
    }
}
// export interface EC2ClusterStackProps extends StackProps { vpc: Vpc, }
