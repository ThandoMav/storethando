module.exports = {
  siteUrl: 'https://www.julyclient.vercel.app',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.julyclient.vercel.app/post-server-sitemap.xml',
      'https://www.julyclient.vercel.app/product-server-sitemap.xml',
      'https://www.julyclient.vercel.app/service-server-sitemap.xml',
    ],
  },
};
