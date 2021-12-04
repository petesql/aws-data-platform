#!/usr/bin/env node
import 'source-map-support/register';
import { App, Construct } from '@aws-cdk/core';
import { CdkStack } from '../lib/index';

interface EnvProps {
  prod: boolean;
}

const stackProps = {
  env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
  }
}

const app = new App();


class myApp extends Construct {
  constructor(scope: Construct, id: string, props?: EnvProps) {
      super(scope, id);
      let peerCidrIp: string = app.node.tryGetContext('peerIp');
      let keyName: string = app.node.tryGetContext('keyName');
      
      if (peerCidrIp == null) {
          console.log('"peerIp" context key missing, using hard-coded cidr...');
          peerCidrIp = '10.10.10.0/24'
          console.log('"peerIp" has been set to ' + peerCidrIp);
      } else {
          console.log('Default "peerIp" is set to ' + peerCidrIp);
      }
      
      if (keyName == null) {
          console.log('"keyName" context key missing, using hard-coded keyname...');
          keyName = 'pw_key_pair'
          console.log('"keyName" has been set to ' + keyName);
          // can also use aws ec2-instance-connect send-ssh-public-key to provide SSH public key
      } else {
          console.log('Default "keyName" is set to ' + keyName);
      }
      
      new CdkStack(app, 'base-stack', stackProps);
        // new ec2Stack(app, 'ec2-stack', { }); ... consider for cdk deply/destroy

}}
new myApp(app, "myapp");
