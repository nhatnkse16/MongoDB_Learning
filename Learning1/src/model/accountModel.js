const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * MongoDB: - Được gọi là "schema-less" vì nó không yêu cầu các bảng có cấu trúc cố định (schema) như trong SQL. 
 *          - Có thể chèn các tài liệu JSON vào MongoDB mà không cần định rõ cấu trúc trước.
 * mongoose:    - Được sử dụng để định nghĩa cấu trúc (schema) cho dữ liệu khi muốn áp dụng một mức độ kiểm soát cao hơn đối với dữ liệu trong MongoDB.
 *              - Giúp định rõ cấu trúc, kiểu dữ liệu, và các ràng buộc khác cho dữ liệu trong MongoDB.
 */

const accountModel = new Schema({                       // File Model
    // _id: Schema.ObjectId,                            // Là mặc định, không nhất thiết phải viết vào
    username: String,
    password: String,
    age: Number,
    phone: String,
    address: String
}, {
    /* Khi sử dụng Mongoose để tạo mô hình (Schema) cho các đối tượng MongoDB, 
     * thì Mongoose sẽ tự động chuyển đổi tên collection từ số ít sang số nhiều khi lưu trữ dữ liệu vào MongoDB. 
     * Mongoose thực hiện quy tắc này bằng cách thêm ký tự "s" vào cuối tên collection.
     *   Vd: account -> accounts
     *       person -> people
     * 
     * => Để tên được khớp chính xác nhất => collection
     */
    collection: 'Account'
});

const Account = mongoose.model('Account', accountModel);
module.exports = Account;