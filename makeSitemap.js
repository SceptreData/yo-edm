const sitemap = require('nextjs-sitemap-generator');

sitemap({
  // baseUrl: 'http://localhost:3000/',
  baseUrl: 'https://www.yoedmonton.com',
  ignoredPaths: ['admin', 'api'],
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'static/'
});

console.log('---> Static Sitemap Generated.');
