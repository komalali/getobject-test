import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

export const roles = config.getObject<string[]>('roles') || [];
