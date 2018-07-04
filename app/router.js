/**
 * @desc 路由管理
 * @author padipata
 * @date 2018/6/29
 *
 *
 *　　　　　　　 ┏┓       ┏┓+ +
 *　　　　　　　┏┛┻━━━━━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　 ┃
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 █████━█████  ┃+
 *　　　　　　　┃　　　　　　 ┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　 ┃ + +
 *　　　　　　　┗━━┓　　　 ┏━┛
 *               ┃　　  ┃
 *　　　　　　　　　┃　　  ┃ + + + +       神兽保佑,代码无bug
 *　　　　　　　　　┃　　　┃　+
 *　　　　　　　　　┃　　　┃ + 　　　　
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+
 *　　　　　　　　　┃　 　 ┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━━━┳┓┏┛ + + + +
 *　　　　　　　　　 ┃┫┫　 ┃┫┫
 *　　　　　　　　　 ┗┻┛　 ┗┻┛+ + + +
 */
'use strict';

module.exports = app => {
    // 用户校验中间件
    const {router, controller} = app;
    //验证token中间件
    const auth = app.middlewares.auth();
    // router.post('/api/user', auth.isLogin, 'api.user.getUser');//实例

    // 进入首页
    router.get('/', 'admin.index.index');

    // 发送邮件
    router.get('/api/sendmail', 'api.mail.getMail');

    // --------------------------------------------
    //                   v1 组群
    // --------------------------------------------
    router.get('/api/v1/getUser', 'api.user.getUser');//获取用户信息

};
