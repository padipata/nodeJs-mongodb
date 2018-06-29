'use strict';

const Service = require('egg').Service;

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 获取用户信息
         * @param {username}        用户名
         * @return {Promise.<*>}    用户信息
         */
        async getUser(username) {
            console.log(username, 'test')
            const user = await this.ctx.model.User.find({});
            console.log(user);
            // if (user) {
            //     return user
            // }
            // throw new Error('用户不存在')
            return user
        }
    }

    return UserService;
};
