module.exports = {
  target: 'serverless',
  env: {
    TMASTER_API_KEY: '@tmaster_api'
  },
  build: {
    env: {
      TMASTER_API_KEY: '@tmaster_api'
    }
  }
};
