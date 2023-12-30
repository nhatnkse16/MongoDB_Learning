const mongoose = require('mongoose');
const { connectToDatabase } = require('../config/mongoDB');
const AccountModel = require('../model/accountModel');

/** Example 3:
 *
 *  UPDATE()
 *
 *  AccountModel.update({}, {});             // 2 Object : Điều kiện - Giá trị
 *
 *  Nếu Object điều kiện {} bằng rỗng ===> Update giá trị của trường nào đó cho toàn bộ trong bảng
 *  Vd: Update giá trị Name = 'User' cho toàn bộ trong bảng AccountModel
 * 
 */

/*
 * Update One ===> Phương thức này cập nhật tối đa một bản ghi khớp với các điều kiện lọc đã chỉ định.
 * Nó dừng cập nhật sau khi tìm thấy bản ghi khớp đầu tiên.
 */


const idAcountUpdate = new mongoose.Types.ObjectId('658c02e00511f22412a4ff33');
// console.log('>>> idAcountUpdate ', idAcountUpdate)

const updateOneExample = async (idA) => {
    try {
        await connectToDatabase();

        await AccountModel.updateOne({
            _id: idA
        }, {
            $set: { phone: 'NaN' }
        });

        console.log(`>>> Update Account Where ID = ${idA} Success !!! \n `);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

// updateOneExample(idAcountUpdate);


/*
 * Update many ===> Phương thức này cập nhật tất cả các bản ghi khớp với các điều kiện lọc đã chỉ định.
 */


const updateManyExample = async () => {
    try {
        await connectToDatabase();

        await AccountModel.updateMany({
            password: '9a9a9a9a'
        }, {
            $set: {
                password: 'zxzxzxzx',
                phone: '0356565656'
            }
        });

        console.log(`>>> Update Success !!!`);

    } catch (error) {
        console.error('Error running queries:', error);
    } finally {
        // Close the database connection if needed
        mongoose.connection.close();
    }
};

// updateManyExample();