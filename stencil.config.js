const sass = require('@stencil/sass');

exports.config = {
  outputTargets: [
    { type: 'www' }
    // { type: 'dist' }
  ],
  bundles: [
    { components: ['kn-button'] },
    { components: ['kn-option', 'kn-select'] },
    { components: ['kn-code'] },
  ],
  namespace: 'knitter',
  // generateDistribution: true,
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
