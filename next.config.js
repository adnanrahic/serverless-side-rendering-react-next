module.exports = {
  build: {
    vendor: ['axios'],
    publicPath: `/_next/`
    // publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`
  },
  srcDir: '/',
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false
}