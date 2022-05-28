
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports =(phase) => {

  let baseConfig = {
    experimental: {
      esmExternals: false
    },
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }

      return config;
    }
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
      poweredByHeader: false,
      redirects: () => {
        return [
          {
            "source": "/blog/:path",
            "destination": "/:path",
            "permanent": true
          },
        ]
      }
    })
  }
};
