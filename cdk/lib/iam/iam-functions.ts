import { Construct } from '@aws-cdk/core';
import { User, UserProps } from '@aws-cdk/aws-iam';
import { glueRole } from '../iam/iam-constructs'

/**
 * Create a new IAM User. 
 * @param scope
 * @param iamUsername IAM Username, STRING
 * @returns IAM Username.
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
export { createUser, createGlueRole };
