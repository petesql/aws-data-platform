import * as core from "@aws-cdk/core";
import * as s3 from '@aws-cdk/aws-s3';
import { createBucket } from '../s3/s3-utils';

export class s3Stack extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props);

        // create s3 buckets (using utils function)
        // this bucket will have the default config
        createBucket(this, 
            'pw-fn-default1', //shows as enabled
        ) // buckets and objects are not public
    
        // create a s3 bucket that persists between cdk stack deploy/destroy
        createBucket(this, 
            'pw-fn-persist1',
            {
                versioned: false,
                removalPolicy: core.RemovalPolicy.DESTROY,
            }
        )
  
    }
}

