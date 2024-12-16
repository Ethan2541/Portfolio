// next-sitemap.js
module.exports = {
  siteUrl: 'https://www.malekbouzarkouna.com',
  generateRobotsTxt: true, // Génère aussi un robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};

