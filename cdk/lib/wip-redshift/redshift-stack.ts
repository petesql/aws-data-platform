import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";
import { createRedshiftCluster } from "./redshift-constructs";
import { vpcProps } from "../ec2/vpc-props";


export class redshiftStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
      
      // create a vpc for the stack
      const coreVpc = new Vpc(this, id, vpcProps)    

      const cluster01 = new createRedshiftCluster(this, 
        'redshift-cluster-01',
        coreVpc,
        'dp-rs-cluster-01',
        'master',
        )
    }
}
