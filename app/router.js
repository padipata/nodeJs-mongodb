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
    const {router, controller} = app;
    const auth = app.middlewares.auth();//校验用户token中间件
    router.redirect('/', '/index.html');// 首页重定向
    router.get('/api/sendmail', 'api.mail.getMail');// 发送邮件

    router.post('/api/v2/user/register', 'api.user.register');//注册
    router.post('/api/v2/user/login', 'api.user.login');//登录
    router.post('/api/v2/user', auth.isLogin, 'api.user.getUser');//用户信息
    router.post('/api/v2/users', auth.isLogin, 'api.user.getUsers');//用户列表
    router.post('/api/v2/user/update', auth.isLogin, 'api.user.update');//更新用户信息
    router.post('/api/v2/user/changePassword', auth.isLogin, 'api.user.changePassword');//修改密码


};
