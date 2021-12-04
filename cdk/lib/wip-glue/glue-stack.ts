/* 
import { Construct, Stack, StackProps } from '@aws-cdk/core';
//import * as glue from '@aws-cdk/aws-glue';
//import { Job, JobExecutable, GlueVersion, Code } from '@aws-cdk/aws-glue';
import { createGlueRole } from '../iam/iam-utils';
import { createBucket } from '../s3/s3-utils';

 * Glue CDK Stack 
 * @param scope
 * @param id
 * @param props
 
export class glueStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        
        //create glue database
        const glue_db = new glue.Database(this, "glue-workflow-db", {
          databaseName: "glue-workflow-db",
        });

        // Create iam new service role for glue
        const glueRole1 = createGlueRole(this, 'glueRole001') 
        // Add AWSGlueServiceRole to role.
        //const gluePolicy = iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSGlueServiceRole");
        //role.addManagedPolicy(gluePolicy);

        // create bucket for glue
        const glueS3Bucket = createBucket(this, 
            'dp-glue-data', //shows as enabled
        ) // buckets and objects are not public
        // Assign role to S3 bucket
        //glueS3Bucket.grantReadWrite(role);
        
    }
    // Create a new S3 bucket for Glue job.
    // const bucketName = '<ID>-fifa';
    // const dataBucketName = '<ID>-data';


    // Assign permission to data bucket
    // const dataS3Bucket = s3.Bucket.fromBucketName(this, 'existingBucket', dataBucketName);

    //dataS3Bucket.grantReadWrite(role);

*/

  