const pulumiConfig = require('js-yaml').safeLoad(require('fs').readFileSync(process.env.PULUMI_TEST_CONFIG_FILE, 'utf8'));

process.env.PULUMI_TEST_MODE = "true";
process.env.PULUMI_NODEJS_STACK = "unit";
process.env.PULUMI_NODEJS_PROJECT = "test"
process.env.PULUMI_CONFIG = JSON.stringify(pulumiConfig.config);

import {expect} from 'chai';
import {roles} from '../index';

describe("index", function () {
    it(`bar role should be defined`, function (done) {
        expect(roles).to.contain('bar');
    });

    it(`foo role should be defined`, function (done) {
        expect(roles).to.contain('foo');
    });
});