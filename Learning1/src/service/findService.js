const mongoose = require('mongoose');
const { connectToDatabase } = require('../config/mongoDB');
const AccountModel = require('../model/accountModel');

/** Example 1:
 *
 *  FIND() ===> Hàm Find() sẽ trả về một Mảng, nếu không có gì thì mảng đó sẽ là Mảng rỗng
 *
 */

// 1. Find All:

const findAllAccount = async () => {
    try {
        await connectToDatabase();

        const allAccounts = await AccountModel.find({});
        console.log(">>> All Accounts: ", allAccounts);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

// findAllAccount();

// 2. Find -> phone = '0393939939':

const findAccountByPhone = async () => {
    try {
        await connectToDatabase();

        const accounts = await AccountModel.find({
            phone: '0393939939'
        });
        console.log(">>> Accounts: ", accounts);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

// findAccountByPhone();

// 3. Find -> username = 'admin' && password = '123':

const findAccountByUsernameAndPassword = async (fusername, fpassword) => {
    try {
        await connectToDatabase();

        const accounts = await AccountModel.find({
            username: fusername,
            password: fpassword,
        });
        console.log(">>> Accounts: ", accounts);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

findAccountByUsernameAndPassword('Admin 02', 'ad123');

