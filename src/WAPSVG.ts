
import {WAPPlugin} from '@wap/core';

export class WAPSVG extends WAPPlugin<XMLDocument> {
    protected async _read(data: Uint8Array, type: string): Promise<XMLDocument> {
        let svgText: string = String.fromCharCode.apply(null, data);
        let parser: DOMParser = new DOMParser();
        return parser.parseFromString(svgText, 'image/svg+xml');
    }
}

export default WAPSVG;
