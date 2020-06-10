
import * as api from '../src/api';
import WAPSVG from '../src/WAPSVG';
import APIDefault from '../src/api';

describe('Public API', () => {
    it('Named import', () => {
        expect(api.WAPSVG).toBe(WAPSVG);
    });

    it('Default import', () => {
        expect(APIDefault).toBe(WAPSVG);
    });
});
