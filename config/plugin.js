'use strict';

//mysql 配置
// exports.mysql = {
//     enable: true,
//     package: 'egg-mysql',
// };

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
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
