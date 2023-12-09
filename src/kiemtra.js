
const util = require('util');
const { tong, hieu, tich, thuong } = require('./pheptoan'); // Chỉnh sửa đường dẫn tệp pheptoan.js

let soA = 10;
let soB = 15;

console.log(util.format(`Kết quả của phép cộng ${soA} + ${soB} là: ${tong(soA, soB)}`));
console.log(util.format(`Kết quả của phép trừ ${soA} - ${soB} là: ${hieu(soA, soB)}`));
console.log(util.format(`Kết quả của phép nhân ${soA} * ${soB} là: ${tich(soA, soB)}`));
console.log(util.format(`Kết quả của phép chia ${soA} / ${soB} là: ${thuong(soA, soB)}`));
