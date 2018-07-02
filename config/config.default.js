'use strict';

const path = require('path');
module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516418387158_7965';

    // 部署环境
    config.domain = 'http://127.0.0.1:7001';

    // 微信相关
    config.appId = 'wx8bc5d288383a85c9';
    config.appSecret = '121dd6705a31acf18eb489ae9b8380aa';

    //连接 MongoDB
    config.mongoose = {
        url: 'mongodb://127.0.0.1/egg',
        options: {},
    };

    //模板渲染
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        },
    };

    //静态资源相对路径
    config.static = {
        prefix: '/',
        dir: [path.join(appInfo.baseDir, 'app/view'), path.join(appInfo.baseDir, 'app/public')],
        dynamic: true,
        preload: false,
        buffer: false,
        maxFiles: 1000,
    };

    // token凭证
    config.jwtSecret = 'padipata';

    // 使用koa的中间件
    config.middleware = ['errorHandler'];

    config.auth = {
        test: 'tst',
    };

    //异常捕获路由
    config.errorHandler = {
        match: '/api/v1',
    };

    // 关闭安全威胁csrf的防范
    config.security = {
        csrf: {
            enable: false,
        },
    };

    // 解决跨域
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    return config;
};
