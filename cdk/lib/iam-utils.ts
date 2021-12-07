import { Construct } from '@aws-cdk/core';
import { User, UserProps, ManagedPolicy } from '@aws-cdk/aws-iam';
import { glueRole } from '../lib/iam-constructs'

// IAM Managed Policies
export const roManagedPol = ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess')
// arn:aws:iam::aws:policy/ReadOnlyAccess

/**
 * Create a new IAM User with params to configure options. 
 * @param scope
 * @param iamUsername IAM Username, STRING
 * @returns IAM Username
 */
function createUser(
  scope: Construct,
  iamUsername: string,
  userConfig?: UserProps,
): User {
  const userProps = {
    userName: iamUsername,
  };
  const user = new User(
    scope,
    iamUsername,
    { ...userConfig, ...userProps },
  )
  return user
}

/**
 * Create a new Read Only IAM User. 
 * @param scope
 * @param iamUsername IAM Username, STRING
 * @returns IAM Username
 */
 function createReadOnlyUser(
  scope: Construct,
  iamUsername: string,
  userConfig?: UserProps,
): User {
  const userProps = {
    userName: iamUsername,
    managedPolicies: [ roManagedPol ],
  };
  const user = new User(
    scope,
    iamUsername,
    { ...userConfig, ...userProps },
  )
  return user
}

/**
 * Create a new IAM Service Role for Glue. 
 * @param scope
 * @param glueRoleName Role Name, STRING
 * @returns IAM Role Name.
 */
function createGlueRole(
  scope: Construct,
  glueRoleName: string,
): glueRole {
  const gluerole = new glueRole(
    scope,
    glueRoleName + '-gluesvc',
    glueRoleName,
  )
  return gluerole;
}

// add to policy 
export { createUser, createReadOnlyUser, createGlueRole };
