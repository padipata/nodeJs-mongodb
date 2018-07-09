'use strict';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports = app => {
    class UserService extends app.Service {
        // 用户登录
        async login(user) {
            user.password = crypto.createHash('md5').update(user.password).digest('hex');
            if (await this.checkUser(user.userId, user.password)) {
                const userInfo = await this.getUserById(user.userId);
                const token = jwt.sign({userId: user.userId,}, app.config.jwtSecret, {expiresIn: '7d'});
                this.ctx.set('authorization', 'Bearer ' + token);
                return token;
            }
            throw new Error('用户名或密码错误');
        }

        // 注册用户
        async register(user) {
            if (await this.hasRegister(user.userId)) {
                throw new Error('用户已存在');
            }
            user.password = crypto.createHash('md5').update(user.password).digest('hex');
            return await app.model.User.create(user);
        }

        // 删除用户
        async delete(userId) {
            await app.model.User.remove({userId});
        }

        // 修改密码
        async changePassword(userId, pwd) {
            const password = crypto.createHash('md5').update(pwd).digest('hex');
            const user = await app.model.User.findOneAndUpdate({userId}, {password});
            return user;
        }

        // 该账号是否已经注册
        async hasRegister(userId) {
            const user = await app.model.User.findOne({userId});
            if (user && user.userId) {
                return true;
            }
            return false;
        }

        // 验证账号密码是否正确
        async checkUser(userId, password) {
            const user = await app.model.User.findOne({userId, password});
            if (user && user.userId) {
                return true;
            }
            return false;
        }

        // 获取用户信息
        async getUserById(userId) {
            const user = await app.model.User.findOne({userId}, '-_id -password -__v');
            if (user) {
                return user;
            }
            throw new Error('用户不存在');
        }

        // 获取用户列表
        async getUsers() {
            const users = await app.model.User.find({}, '-_id -password -__v');
            return users;
        }

        // 用户信息更新
        async update(userId, updateDate) {
            const user = await this.app.model.User.findOneAndUpdate({userId}, updateDate);
            return user;
        }
    }

    return UserService;
};
