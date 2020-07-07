/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594019070688_4678';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: 'iot',
    appID: 'wx57f1ffbcdc635211',
    appsecret: '5c5f539acf937ad6bcb8abeb8a6dd287',
    serverUrl: 'https://api.weixin.qq.com/cgi-bin/token',
  };

  return {
    ...config,
    ...userConfig,
  };
};
