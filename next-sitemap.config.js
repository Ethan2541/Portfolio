/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ethanluong.com', // Ton URL principale
  generateRobotsTxt: true, // Générer robots.txt
  exclude: ['/api/*'], // Exclut les API ou autres routes inutiles
  generateIndexSitemap: false, // Empêche la génération de `sitemap-index`
  changefreq: 'monthly', // Fréquence des mises à jour
  priority: 0.7, // Priorité par défaut
};
