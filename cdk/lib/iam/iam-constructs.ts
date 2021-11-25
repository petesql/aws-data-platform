import * as core from "@aws-cdk/core";
import * as iam from '@aws-cdk/aws-iam';
import { User, UserProps } from "@aws-cdk/aws-iam";

export class iamUser extends core.Construct {
    constructor(scope: core.Construct, id: string, iamUserName: string, userConfig?: UserProps) {
        super(scope, id);
   
        const userProps = {
            userName: iamUserName,
          };
        const user = new User(
        scope,
        iamUserName,
        { ...userConfig, ...userProps },
        )
    }
}
