'use strict';

const Service = require('egg').Service;
const CryptoJS = require('crypto-js');
// const cryptoRandomString = require('crypto-random-string');

class signatureService extends Service {
  async get() {
    const { appID } = this.config;
    const { wxTicket } = this.ctx.app;
    // const { url, header: { host } } = this.ctx.request;
    // const fullUrl = `${host}${url}`;
    const fullUrl = 'http://127.0.0.1';
    // const noncestr = cryptoRandomString({ length: 10 });
    const noncestr = 'Wm3WZYTPz0wzccnW';
    const numTimestamp = new Date().getTime();
    const timestamp = numTimestamp.toString().slice(0, 10);
    const string = `jsapi_ticket=${wxTicket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${fullUrl}`;
    console.log(string);
    const signature = CryptoJS.SHA1(string).toString(CryptoJS.enc.Hex);
    return {
      appID,
      signature,
      noncestr,
      wxTicket,
      timestamp,
      fullUrl,
    };
  }
}

module.exports = signatureService;
