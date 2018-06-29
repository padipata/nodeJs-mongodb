'use strict';

//用户信息模型
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        username: {type: String},
        sex: {type: String},
        age: {type: Number}
    });

    return mongoose.model('User', UserSchema, 'user');
}