'use strict';

//mysql
// exports.mysql = {
//     enable: true,
//     package: 'egg-mysql',
// };

//mongodb
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

//模板渲染
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};

//信息校验
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

//安全校验
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
