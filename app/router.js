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

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // 用户校验中间件
    const {router, controller} = app;

    router.get('/', 'admin.index.index');
    // --------------------------------------------
    //                   v1 组群
    // --------------------------------------------
    router.get('/api/v1/getUser', 'api.user.getUser');//获取用户信息


};
