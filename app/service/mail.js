'use strict';
const nodemailer = require('nodemailer');
const moment = require('moment');

module.exports = app => {
    const transporter = nodemailer.createTransport({
        service: 'qq',
        // host: app.config.mail.host,
        // port: app.config.mail.port,
        // secure: false,
        auth: {
            user: app.config.mail.auth.user,
            pass: app.config.mail.auth.pass,
        },
        // tls: {
        // rejectUnauthorized: false,
        // },
    });

    class MailService extends app.Service {
        // 发送邮件
        async send(to, subject, text, html) {
            const mailOptions = {
                from: `padipata<${app.config.mail.auth.user}>`,     // 发送人
                to,                                                 // 接收人 如：'bar@example.com, baz@example.com'
                subject,                                            // 邮件主题
                text,                                               // 纯文本内容
                html,                                               // 自定义 html 内容
                attachments: [                                      // 添加附件，可多个
                    {
                        filename: 'test.txt',//附件名
                        content: '测试内容'//附件内容
                    }
                ]
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
        }

        // 发送邀请邮件
        async sendInvitation({_id, developer, title, charge, platform, startDate, endDate, detail, hardRes, devRes}) {
            const developerStr = this.developerObjectToString(developer);
            for (let i = 0; i < developer.length; i++) {
                const item = developer[i];
                if (item.email) {
                    const style = '<div style="min-width: 500px;padding: 1em;border: 1em solid transparent;background: linear-gradient(white, white) padding-box,repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;max-width: 20em;font: 100%/1.6 Baskerville, Palatino, serif;">';
                    const headerHtml = `<h3 style="text-align: center">项目邀请函</h3><p>${item.nickName}您好：</p><p style="text-indent:2em">${charge}邀请您参加"${title}"项目的开发</p>`;
                    const chargeHtml = `<p style="text-indent:2em">负责人：${charge}</p>`;
                    const developerHtml = `<p style="text-indent:2em">参与人：${developerStr}</p>`;
                    const platformHtml = `<p style="text-indent:2em">开发平台：${platform}</p>`;
                    const startDateHtml = `<p style="text-indent:2em">开始时间：${moment(startDate).format('YYYY年MM月DD日')}</p>`;
                    const endDateHtml = `<p style="text-indent:2em">结束时间：${moment(endDate).format('YYYY年MM月DD日')}</p>`;
                    const hardResHtml = `<p style="text-indent:2em">硬件资源：${hardRes}</p>`;
                    const devResHtml = `<p style="text-indent:2em">开发资源：${devRes}</p>`;
                    const detailHtml = `<p style="text-indent:2em">应用价值：${detail}</p>`;
                    const linkHtml = `<p style="text-indent:2em"><a href="${app.config.domain}/#/projectDetail/${_id}">点击查看详情</a></p>`;
                    const footerHtml = '<div style="text-align:right">from： padipata自动发送</div></div>';
                    const releaseHtml = style + headerHtml + chargeHtml + developerHtml + platformHtml + startDateHtml + endDateHtml + hardResHtml + devResHtml + detailHtml + linkHtml + footerHtml;
                    await this.send(item.email, 'padipata系统通知', '', releaseHtml);
                }
            }
        }

        developerObjectToString(developer) {
            let developerStr = '';
            developer.forEach(item => {
                developerStr = developerStr + item.nickName + '，';
            });
            developerStr = developerStr.substring(0, developerStr.length - 1);
            return developerStr;
        }
    }

    return MailService;
};
