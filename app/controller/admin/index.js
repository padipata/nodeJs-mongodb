'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    //模板渲染
    async index() {
        const {ctx} = this;
        await ctx.render('index.ng');
    }
}

module.exports = IndexController;
