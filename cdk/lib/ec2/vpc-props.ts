
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';
import * as core from "@aws-cdk/core";

// create a vpc for the stack
const vpcProps = {
    cidr: "10.0.0.0/16",
    natGateways: 1,
    subnetConfiguration: [
    {
        name: "publicSubnet1",
        subnetType: SubnetType.PUBLIC,
    },
    ],
};
export { vpcProps };

/*
export class v1 extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);
        
        // create a vpc for the global stack
        const myVpc = new Vpc(scope, 'VPC', {
            cidr: '10.0.0.0/24',
            natGateways: 0,
            subnetConfiguration: [
                {
                    subnetType: SubnetType.PUBLIC,
                    name: 'Public',
                    cidrMask: 28
                },
                {
                    subnetType: SubnetType.ISOLATED,
                    name: 'Private',
                    cidrMask: 28
                },
            ]
        });  
    }
}
*/