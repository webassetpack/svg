
/// <reference path="./support/tsdefs/node-blob.d.ts" />

import {
    WAPTestTools,
    WAPReader,
    PluginManager,
    WAPTestFactory,
    TestWAP
} from '@wap/test-tools';
import {IDictionary} from '@totalpave/interfaces';
import Blob from 'node-blob';
import WAPSVG from '../src/WAPSVG';
import def from './support/def.json';
import {JSDOM} from 'jsdom';

describe('WAPSVG', () => {
    let reader: WAPReader = new WAPReader(new WAPTestFactory());
    let pack: TestWAP = null;
    let jsdom: JSDOM = new JSDOM();

    beforeAll(async () => {
        (<any>global).Blob = Blob;
        (<any>global).DOMParser = jsdom.window.DOMParser;
        
        PluginManager.getInstance().addPlugin('svg', new WAPSVG());
        let buffer: ArrayBuffer = await WAPTestTools.compile(def);
        pack = <TestWAP>(await reader.read(buffer));
    });

    beforeEach(() => {
        (<any>global).URL = jasmine.createSpyObj('URL', [ 'createObjectURL' ]);
    });

    const files: Array<string> = [ 'logo.svg' ];

    let checksums: IDictionary<string> = {
        'logo.svg': 'fd725f56e9b3519f1bc8682899df80cb'
    };

    files.forEach((file: string) => {
        it(`File Check: ${file}`, async () => {
            let svg: XMLDocument = await pack.get(file);
            expect(svg instanceof jsdom.window.Document).toBe(true);
        });

        it(`MD5 Checksum Check: ${file}`, async () => {
            expect(pack.md5(file)).toBe(checksums[file]);
        });
    });
});
