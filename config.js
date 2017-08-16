const configs = {
  local: {
    apiUrl: 'http://localhost:4200',
  },
  development: {
    apiUrl: 'a broken url for now',
  },
  production: {
    apiUrl: 'https://2dusz11q81.execute-api.us-east-1.amazonaws.com/prod',
  },
}

const NODE_ENV = process.env.NODE_ENV || 'local'

module.exports = () => (configs[NODE_ENV])
