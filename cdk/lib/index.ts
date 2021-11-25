import * as cdk from '@aws-cdk/core';
import * as iam from "@aws-cdk/aws-iam";
import { createBucket } from '../lib/s3-utils';
import { createUser, createRole } from '../lib/iam/iam-functions';
import { iamUser } from '../lib/iam/iam-constructs'
import { countReset } from 'console';
import { Construct, Stack } from '@aws-cdk/core';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1

  }
}

