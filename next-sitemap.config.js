/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.finpeso.com',

  changefreq: 'never',

  priority: 0.8,

  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  additionalPaths: async (config) => [
    await config.transform({
      loc: '/',
      changefreq: 'never',
      priority: 1.0,
    }),
    await config.transform({
      loc: '/aboutus',
      changefreq: 'never',
      priority: 0.8,
    }),
    await config.transform({
      loc: '/services', 
      changefreq: 'never',
      priority: 0.8,
    }),
    await config.transform({
      loc: '/contact',
      changefreq: 'never',
      priority: 0.8,
    }),
    // await config.transform({
    //   loc: '/service/proactiveroofcare',
    //   changefreq: 'never',
    //   priority: 0.8,
    // }),
  ],
};
