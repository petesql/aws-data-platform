/*
import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { createBucket } from '../s3/s3-utils';

export class s3Stack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
      
      // create a s3 bucket that persists between cdk stack deploy/destroy
      createBucket(this, 'pw-fn-persist1', {
          versioned: false,
          // removalPolicy: core.RemovalPolicy.DESTROY,
        })
    }
}
*/
