# node.js - mongodb 通用模板

## 更新信息

更新时间| 更新内容|更新说明
---|---|---
2018-01-28 | 初始化项目 |
2018-01-30 | 添加egg-validate| 用户登录校验
2018-03-08 | 添加egg-mongoose| 数据库
2018-03-08 | 配置csrf安全| 
2018-03-08 | 添加egg-cors| 解决浏览器跨域
2018-03-09 | 添加jsonwebtoken | 生成 token
2018-03-09 | 添加中间件 auth.js | 校验用户 token 信息
2018-03-09 | 添加crypto加密 | crypto.createHash('md5').update(user.user_name).digest('hex');
2018-07-01 | 添加egg-view-nunjucks | 模板渲染
2018-07-01 | 添加中间件 wechat.js | 封装微信授权校验
2018-07-04 | 添加邮件发送 | /api/sendmail

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod)

