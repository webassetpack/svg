
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/api.ts',
        output: [
            {
                file: 'dist/cjs/wap-svg.js',
                format: 'cjs',
                name: 'wapSvg',
                exports: 'named'
            },
            {
                file: 'dist/iife/wap-svg.js',
                format: 'iife',
                name: 'wapSvg',
                exports: 'named'
            },
            {
                file: 'dist/umd/wap-svg.js',
                format: 'umd',
                name: 'wap-plugin-object-url',
                exports: 'named'
            },
            {
                file: 'dist/amd/wap-svg.js',
                format: 'amd',
                name: 'wapSvg',
                exports: 'named'
            },
            {
                file: 'dist/es/wap-svg.js',
                format: 'es',
                name: 'wapSvg',
                exports: 'named'
            },
            {
                file: 'dist/system/wap-svg.js',
                format: 'system',
                name: 'wapSvg',
                exports: 'named'
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true
            }),
            commonjs(),
            typescript()
        ]
    }
];
