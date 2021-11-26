import * as core from "@aws-cdk/core";
import * as ec2 from '@aws-cdk/aws-ec2';

export class ec2Stack extends core.Stack {
    createVpc(scope: core.Construct) {
        return new ec2.Vpc(scope, 'VPC', {
            cidr: '10.0.0.0/24',
            natGateways: 0,
            subnetConfiguration: [
                {
                    subnetType: ec2.SubnetType.PUBLIC,
                    name: 'Public',
                    cidrMask: 28
                },
                {
                    subnetType: ec2.SubnetType.ISOLATED,
                    name: 'Private',
                    cidrMask: 28
                },
            ]
        });
    }
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props);

        // 1
    }
}
