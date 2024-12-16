// next-sitemap.js
module.exports = {
  siteUrl: 'https://www.malekbouzarkouna.com', 
  generateRobotsTxt: true, // Active la génération automatique de robots.txt
  changefreq: 'monthly', // Fréquence de mise à jour des pages
  priority: 0.7, // Priorité des pages pour le sitemap
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Autorise toutes les pages
      { userAgent: 'Googlebot', allow: '/' }, // Optionnel : configuration spécifique pour Googlebot
    ],
  },
};
