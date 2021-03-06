const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('152023730');

config
  .setTemplate('leaderboard', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'leaderboard', path: 'pfw_leaderoard' },
    { name: 'article-top-below-head', templateName: 'leaderboard', path: 'pfw-article-top-below-head' },
    { name: 'home-top-below-head', templateName: 'leaderboard', path: 'pfw-home-top-below-head' },
    { name: 'imu1', size: [300, 250], path: 'pfw_imu' },
    { name: 'imu2', size: [300, 250], path: 'pfw_imu_2' },
    { name: 'skyscraper', options: { size: [300, 600] }, path: 'pfw_skyscraper' },
  ]);

module.exports = config;
