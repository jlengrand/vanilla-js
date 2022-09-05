import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'public/adyen.js',
    output: {
        dir: 'public/dist',
        format: 'es'
    },
    preserveEntrySignatures: false,

    plugins: [    
        babel({
            presets: [
              [
                require.resolve('@babel/preset-env'),
                {
                  targets: [
                    'last 3 Chrome major versions',
                    'last 3 Firefox major versions',
                    'last 3 Edge major versions',
                    'last 3 Safari major versions',
                  ],
                  modules: false,
                  bugfixes: true,
                },
              ],
            ]
          }),
        nodeResolve(),
        commonjs(),
        postcss({
          plugins: []
        })
      ],
  };