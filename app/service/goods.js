'use strict';

const Service = require('egg').Service;

module.exports = app => {
    class UserService extends app.Service {
        /**
         * 搜索
         * @param {plant_name}      用户名
         * @return {Promise.<*>}    用户信息
         */
        async sreach(plant_name) {
            const sql = "SELECT * FROM plant WHERE plant_name LIKE '%" + plant_name + "%'";
            const plant = await this.app.mysql.query(sql);
            return plant;
        }
    }

    return UserService;
};
