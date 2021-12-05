# CDK TypeScript

## Project Structure
cdk
> bin
* `cdk.ts` cdk app init file
> lib\iam
* `iam-stack.ts` iam entry-point
> lib\s3
* `s3-stack.ts` s3 entry-point



## Useful CDK Notes & Commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

