const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.yoedmonton.com',
  ignoredPaths: ['admin', 'api', 'event'],
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'static/'
});

console.log('---> Static Sitemap Generated.');
