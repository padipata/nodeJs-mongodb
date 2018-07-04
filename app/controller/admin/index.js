'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    //模板渲染
    async index() {
        const {ctx} = this;
        await ctx.render('index.html', {
            user: {
                name: 'padipata',
            }
        });
    }
}

module.exports = IndexController;
