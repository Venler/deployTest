'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const signature = await ctx.service.signature.get();
    ctx.body = signature;
    ctx.response.set('Access-Control-Allow-Origin', '*');
  }
}

module.exports = HomeController;
