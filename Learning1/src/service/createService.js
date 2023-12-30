const mongoose = require('mongoose');
const { connectToDatabase } = require('../config/mongoDB');
const AccountModel = require('../model/accountModel');

/** Example 2:
 *
 *  CREATE()
 *
 */

const createNewAccount = async () => {
    try {
        await connectToDatabase();

        await AccountModel.create({
            username: "User03",
            password: '123qwe',
            age: 20,
            phone: "0963425548",
            address: 'Ha Tinh'
        }, {
            username: "User04",
            password: 'asdf',
            age: 24,
            phone: "0309555434",
            address: 'Huong Khe'
        }, {
            username: "User05",
            password: 'cxzv',
            age: 29,
            phone: "0978653232",
            address: 'Viet Nam'
        }, {
            username: "User06",
            password: 'ghjh',
            age: 21,
            phone: "0134545123",
            address: 'Da Nang'
        });
        console.log(">>> Create New Account Success !!!");

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

createNewAccount();