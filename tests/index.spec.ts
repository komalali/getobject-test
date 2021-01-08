import * as automation from '@pulumi/pulumi/x/automation';
import {expect} from 'chai';
import {asyncTest} from './utils';

describe('index', function () {
    it(`reads config correctly`, asyncTest(async() => {
        const ws = await automation.LocalWorkspace.create({ workDir: __dirname });
        const settings = await ws.stackSettings('test');
        expect(settings.config!['test:roles']).to.contain('bar');
        expect(settings.config!['test:roles']).to.contain('foo');
    }))
});