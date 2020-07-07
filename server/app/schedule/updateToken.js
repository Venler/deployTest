'use strict';
const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '2h', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
      immediate: true, // 立即执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    // read config
    const { appID, appsecret, serverUrl } = this.config;
    // use build-in http client to GET hacker-news api
    const { data: { access_token } } = await this.ctx.curl(serverUrl, {
      data: {
        grant_type: 'client_credential',
        appid: appID,
        secret: appsecret,
      },
      dataType: 'json',
    });
    const { data: { ticket } } = await this.ctx.curl('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
      data: {
        access_token,
        type: 'jsapi',
      },
      dataType: 'json',
    });
    this.ctx.app.access_token = access_token;
    this.ctx.app.wxTicket = ticket;
  }
}

module.exports = UpdateCache;
