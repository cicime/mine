module.exports = {
  apps : [{
    name: 'mine',
    script: './app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
