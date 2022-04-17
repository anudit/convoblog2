
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports =(phase) => {

  let baseConfig = {
    experimental: {
      esmExternals: false
    },

  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...baseConfig,
    }
  }
  else {
    return withPWA({
      ...baseConfig,
      pwa: {
        dest: 'public',
        runtimeCaching,
        maximumFileSizeToCacheInBytes: 10000000
      },
      experimental: {
        esmExternals: false,
        optimizeCss: true
      },
      poweredByHeader: false
    })
  }
};
