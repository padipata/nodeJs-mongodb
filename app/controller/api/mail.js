'use strict';

const Controller = require('egg').Controller;

class MaliController extends Controller {
    // 获取用户信息
    async getMail() {
        const to = '18814002160@163.com';
        const subject = '测试主题';
        const text = '测试文本';
        const html = '<b>Hello padipata</b>';
        let mail = await this.ctx.service.mail.send(to, subject, text, html);
        if (mail) {
            this.ctx.status = 404;
            this.ctx.body = mail;
            return
        }
        this.ctx.status = 200;
        this.ctx.body = '邮件发送成功'
    }
}

module.exports = MaliController;
