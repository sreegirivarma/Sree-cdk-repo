#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SreeCdkRepoStack } from '../lib/sree-cdk-repo-stack';

const app = new cdk.App();
new SreeCdkRepoStack(app, 'SreeCdkRepoStack');
