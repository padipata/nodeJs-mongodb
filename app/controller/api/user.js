'use strict';

const Controller = require('egg').Controller;

// -----------------------------------
// 传参校验
// 校验参数规则，不通过或者为空时抛出 422
// 格式：ctx.validate(rule, [body]), 如果不传第二个参数会自动校验 `ctx.request.body`
// allowEmpty 默认为false(不能为空)
//------------------------------------
const createRule = {
    username: 'string'
};

class UserController extends Controller {
    // 获取用户信息
    async getUser() {
        const {ctx} = this;
        const {username} = ctx.query;
        if (!username) {
            ctx.status = 404;
            ctx.body = '用户名不能为空';
            return;
        }
        const user = await ctx.service.user.getUser(username);
        ctx.status = 200;
        ctx.body = user;
    }

    //模板渲染
    async index() {
        const {ctx} = this;
        await ctx.render('index.tpl');
    }
}

module.exports = UserController;
