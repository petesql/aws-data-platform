import { Construct, Stack, StackProps } from '@aws-cdk/core';

export class baseStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // 1

  }
}
