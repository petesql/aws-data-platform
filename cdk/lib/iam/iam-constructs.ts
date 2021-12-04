import { Construct } from "@aws-cdk/core";
import { Role, RoleProps, ServicePrincipal } from '@aws-cdk/aws-iam';

/**
 * Glue Role CDK Construct 
 * @param scope
 * @param iamRoleName Role Name, STRING
 * @returns IAM Role Name.
 */
export class glueRole extends Construct {
    constructor(scope: Construct, id: string, iamRoleName: string, roleConfig?: RoleProps) {
      super(scope, id);
      
      const roleProps = {
          id: id,
          roleName: iamRoleName,
          assumedBy: new ServicePrincipal('glue.amazonaws.com')
      };
      const role = new Role(
          scope,
          iamRoleName,
          { ...roleConfig, ...roleProps },
      )
      return role;
    }
}