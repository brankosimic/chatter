const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    API: 'https://jsonplaceholder.typicode.com',
  },
});
