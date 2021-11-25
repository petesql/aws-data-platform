import { Construct, RemovalPolicy } from '@aws-cdk/core';
import { Role, RoleProps, ManagedPolicyProps, ServicePrincipal, User, UserProps } from '@aws-cdk/aws-iam';


function createUser(
  scope: Construct,
  fullUserName: string,
  userConfig?: UserProps,
): User {
  const userProps = {
    userName: fullUserName,
  };
  const user = new User(
    scope,
    fullUserName,
    { ...userConfig, ...userProps },
  )
  return user
}

/**
 * @param scope
 * @param fullRoleName 
 * @param managedPolicies
 * @returns iam role name
 */
function createRole(
  scope: Construct,
  fullRoleName: string,
): Role {
  const roleProps = {
    roleName: fullRoleName,
    assumedBy: new ServicePrincipal('sns.amazonaws.com'),
};
  const role = new Role(
    scope,
    fullRoleName,
    { ...roleProps, },
  )
  return role;
}

// add to policy 
export { createUser, createRole };