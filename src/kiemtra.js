const util = require( 'util');
const { PhepToan } = require("./pheptoan");

let soA = 200;
let soB = 100;


console.log(util.format(`Kết quả của phép cộng ${soA} + ${soB} là: ${PhepToan.tong(soA, soB)}`));
console.log(util.format(`Kết quả của phép trừ ${soA} - ${soB} là: ${PhepToan.hieu(soA, soB)}`));
console.log(util.format(`Kết quả của phép nhân ${soA} * ${soB} là: ${PhepToan.tich(soA, soB)}`));
console.log(util.format(`Kết quả của phép chia ${soA} / ${soB} là: ${PhepToan.thuong(soA, soB)}`));
console.log(util.format(`Kết quả của phép cân bậc ${soA} là: ${PhepToan.canBacHai(soA)}`));






// const { PhepToan } = require("./PhepToan");

// describe('Kiểm tra các phép toán cơ bản', () => {
//     test('Kiểm tra phép cộng - Trường hợp pass', () => {
//         const result = PhepToan.tong(3, 5);
//         expect(result).toBe(8); // Kết quả mong đợi là 8
//     });

//     test('Kiểm tra phép trừ - Trường hợp pass', () => {
//         const result = PhepToan.hieu(3, 5);
//         expect(result).toBe(-2); // Kết quả mong đợi là -2
//     });
// });
