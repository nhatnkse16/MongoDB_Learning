const mongoose = require('mongoose');
const { connectToDatabase } = require('../config/mongoDB');
const AccountModel = require('../model/accountModel');

/** Example 4:
 *
 *  DELETE()
 *
 */

const idAcountDelete = new mongoose.Types.ObjectId('658fea6e6728be1e647666df');

const deleteNewAccount = async (idD) => {
    try {
        await connectToDatabase();

        /** 
         * DeleteOne
         * ===> Xoá tối đa một bản ghi khớp với các điều kiện lọc đã chỉ định.
         */

        await AccountModel.deleteOne({
            _id: idD
        });

        /** 
         * DeleteMany
         * ===> Xoá tất cả các bản ghi khớp với các điều kiện lọc đã chỉ định.
         *      Nếu như không cho điều kiện lọc (AccountModel.deleteMany({});) ==> Xoá toàn bộ các bản ghi trong bảng
         */

        // await AccountModel.deleteMany({
        //     _id: idD
        // });

        console.log(`>>> Delete Account Where ID = ${idD} Success !!!`);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

deleteNewAccount(idAcountDelete);