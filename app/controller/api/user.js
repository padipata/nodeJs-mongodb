'use strict';

module.exports = app => {
    class UserController extends app.Controller {
        // 用户注册
        async register() {
            const userId = this.ctx.request.body.userId;
            const password = this.ctx.request.body.password;
            const nickName = this.ctx.request.body.nickName;
            if (!userId || !password) {
                this.ctx.status = 400;
                this.ctx.body = '用户名或者密码不能为空';
                return;
            }
            await this.ctx.service.user.register({nickName, userId, password});
            const token = await this.ctx.service.user.login({userId, password});
            const result = {};
            result.token = token;
            this.ctx.body = result;
            this.ctx.status = 200;
        }

        // 用户登录
        async login() {
            const userId = this.ctx.request.body.userId;
            const password = this.ctx.request.body.password;
            if (!userId || !password) {
                this.ctx.status = 400;
                this.ctx.body = '用户名或者密码不能为空';
                return;
            }
            const token = await this.ctx.service.user.login({userId, password});
            const user = await this.ctx.service.user.getUserById(userId);
            user.token = token;
            this.ctx.body = user;
            this.ctx.status = 200;
        }

        // 用户信息
        async getUser() {
            const userId = this.ctx.request.user.userId;
            const user = await this.ctx.service.user.getUserById(userId);
            this.ctx.body = user;
        }

        // 用户列表
        async getUsers() {
            const users = await this.ctx.service.user.getUsers();
            this.ctx.body = users;
        }

        // 更新用户数据
        async update() {
            const userId = this.ctx.request.user.userId;
            const updateInfo = this.ctx.request.body;
            await this.ctx.service.user.update(userId, {
                nickName: updateInfo.nickName,
                mobile: updateInfo.mobile
            });
            const user = await this.ctx.service.user.getUserById(userId);
            this.ctx.body = user;
        }

        // 修改密码
        async changePassword() {
            const userId = this.ctx.request.user.userId;
            const password = this.ctx.request.body.password;
            if (!password) {
                this.ctx.status = 400;
                this.ctx.body = '密码为空';
                return;
            }
            await this.ctx.service.user.changePassword(userId, password);
            this.ctx.body = '修改成功';
        }
    }

    return UserController;
};

