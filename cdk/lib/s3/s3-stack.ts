import * as core from "@aws-cdk/core";
import * as s3 from '@aws-cdk/aws-s3';
import { createBucket } from '../s3/s3-utils';

export class s3Stack extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props);

        // create bucket for glue
        const glueS3Bucket = createBucket(this, 
            'dp-glue-data', //shows as enabled
        ) // buckets and objects are not public
        // Assign role to S3 bucket
        //glueS3Bucket.grantReadWrite(role);
    
        // create a s3 bucket that persists between cdk stack deploy/destroy
        createBucket(this, 
            'pw-fn-persist1',
            {
                versioned: false,
                removalPolicy: core.RemovalPolicy.DESTROY,
            }
        )
  
        // Create a new S3 bucket for Glue job.
        const bucketName = '<ID>-fifa';
        const dataBucketName = '<ID>-data';


        // Assign permission to data bucket
        const dataS3Bucket = s3.Bucket.fromBucketName(this, 'existingBucket', dataBucketName);

        //dataS3Bucket.grantReadWrite(role);



    }
}

