'use strict';

//用户信息模型
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userId: {type: String},
        nickName: {type: String},
        password: {type: String},
        token: {type: String},
        mobile: {type: String},
    });

    return mongoose.model('User', UserSchema, 'user');
}