const mongoose = require('mongoose');
require('dotenv').config();


/* mongoose.connect(`mongodb://${process.env.HOST}:27017/${process.env.MONGODB}`)
 *     .then(() => console.log('Connected!'));
 */

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.HOST}/${process.env.MONGODB}`);
        console.log(`>>> Connected to MongoDB: mongodb://${process.env.HOST}/${process.env.MONGODB}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
connectToDatabase();



const Schema = mongoose.Schema;

const account = new Schema({
    // _id: Schema.ObjectId,                       // Là mặc định, không nhất thiết phải viết vào
    username: String,
    password: String
}, {
    /* Khi bạn sử dụng Mongoose để tạo mô hình (Schema) cho các đối tượng MongoDB, 
     * thì Mongoose sẽ tự động chuyển đổi tên collection từ số ít sang số nhiều khi lưu trữ dữ liệu vào MongoDB. 
     * Mongoose thực hiện quy tắc này bằng cách thêm ký tự "s" vào cuối tên collection.
     *   Vd: account -> accounts
     *       person -> people
     * 
     * => Để tên được khớp chính xác nhất => collection
     */
    collection: 'Account'
});

const AccountModel = mongoose.model('accountModel', account);

/** Example: */
// 1. Find: ===> Hàm Find() sẽ trả về một Mảng, nếu không có gì thì mảng đó sẽ là Mảng rỗng

AccountModel.find({})
    .then(function (data) {
        console.log(">>> Data: ", data);
    })
    .catch(function (err) {
        console.log('Error: ', err);
    });

// 2. Find -> phone = '0393939939':

// AccountModel.find({
//     abc: '0393939939'
// })
//     .then(function (data) {
//         console.log(">>> Data: ", data);
//     })
//     .catch(function (err) {
//         console.log('Error: ', err);
//     });

// 3. Find -> username = 'admin' && password = '123':

// AccountModel.find({
//     username: 'admin',
//     password: '123'
// })
//     .then(function (data) {
//         console.log(">>> Data: ", data);
//     })
//     .catch(function (err) {
//         console.log('Error: ', err);
//     });