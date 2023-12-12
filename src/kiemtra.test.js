// const util = require( 'util');
// const { PhepToan } = require("./pheptoan");

// let soA = 200;
// let soB = 100;


// console.log(util.format(`Kết quả của phép cộng ${soA} + ${soB} là: ${PhepToan.tong(soA, soB)}`));
// console.log(util.format(`Kết quả của phép trừ ${soA} - ${soB} là: ${PhepToan.hieu(soA, soB)}`));
// console.log(util.format(`Kết quả của phép nhân ${soA} * ${soB} là: ${PhepToan.tich(soA, soB)}`));
// console.log(util.format(`Kết quả của phép chia ${soA} / ${soB} là: ${PhepToan.thuong(soA, soB)}`));
// console.log(util.format(`Kết quả của phép cân bậc ${soA} là: ${PhepToan.canBacHai(soA)}`));



//2=====

// const { PhepToan } = require("./pheptoan");

// describe('Kiểm tra các phép toán cơ bản', () => {
//     const a = 3;
//     const b = 5;

//     test('Kiểm tra phép cộng - Trường hợp pass', () => {
//         const result = PhepToan.tong(a, b);
//         expect(result).toBe(8); // Kết quả mong đợi là 8
//     });

//     test('Kiểm tra phép cộng - Trường hợp fail', () => {
//         const result = PhepToan.tong(a, b);
//         expect(result).toBe(9); // Kết quả mong đợi không khớp là 9, nhưng kết quả thực tế là 8
//     });

//     test('Kiểm tra phép trừ - Trường hợp pass', () => {
//         const result = PhepToan.hieu(a, b);
//         expect(result).toBe(-2); // Kết quả mong đợi là -2
//     });

//     test('Kiểm tra phép trừ - Trường hợp fail', () => {
//         const result = PhepToan.hieu(a, b);
//         expect(result).toBe(-3); // Kết quả mong đợi không khớp là -3, nhưng kết quả thực tế là -2
//     });

//     test('Kiểm tra phép nhân - Trường hợp pass', () => {
//         const result = PhepToan.tich(a, b);
//         expect(result).toBe(15); // Kết quả mong đợi là 15
//     });

//     test('Kiểm tra phép nhân - Trường hợp fail', () => {
//         const result = PhepToan.tich(a, b);
//         expect(result).toBe(16); // Kết quả mong đợi không khớp là 16, nhưng kết quả thực tế là 15
//     });

//     test('Kiểm tra phép chia - Trường hợp pass', () => {
//         const result = PhepToan.thuong(a, b);
//         expect(result).toBe(0.6); // Kết quả mong đợi là 0.6
//     });

//     test('Kiểm tra phép chia - Trường hợp fail', () => {
//         const result = PhepToan.thuong(a, b);
//         expect(result).toBe(0.7); // Kết quả mong đợi không khớp là 0.7, nhưng kết quả thực tế là 0.6
//     });

//     test('Kiểm tra phép căn bậc hai - Trường hợp pass', () => {
//         const result = PhepToan.canBacHai(b);
//         expect(result).toBeCloseTo(2.236, 3); // Kết quả mong đợi là 2.236 với độ chính xác 3 chữ số thập phân
//     });

//     test('Kiểm tra phép căn bậc hai - Trường hợp fail', () => {
//         const result = PhepToan.canBacHai(b);
//         expect(result).toBeCloseTo(2.24, 3); // Kết quả mong đợi không khớp là 2.24 với độ chính xác 3 chữ số thập phân, nhưng kết quả thực tế là 2.236
//     });
// });



// const { PhepToan } = require("./PhepToan");

// describe('Kiểm tra các phép toán cơ bản', () => {
//     test('Kiểm tra phép cộng - Trường hợp pass', () => {
//         const result = PhepToan.tong(3, 5);
//         expect(result).toBe(8); // Kết quả mong đợi là 8
//     });

//     test('Kiểm tra phép cộng - Trường hợp fail', () => {
//         const result = PhepToan.tong(3, 5);
//         expect(result).toBe(9); // Kết quả mong đợi không khớp là 9, nhưng kết quả thực tế là 8
//     });

//     test('Kiểm tra phép trừ - Trường hợp pass', () => {
//         const result = PhepToan.hieu(3, 5);
//         expect(result).toBe(-2); // Kết quả mong đợi là -2
//     });

//     test('Kiểm tra phép trừ - Trường hợp fail', () => {
//         const result = PhepToan.hieu(3, 5);
//         expect(result).toBe(-3); // Kết quả mong đợi không khớp là -3, nhưng kết quả thực tế là -2
//     });

//     // Các test case khác cho phép nhân, chia và căn bậc hai
// });



const { PhepToan } = require("./PhepToan");

describe('Kiểm tra các phép toán cơ bản', () => {
    test('Kiểm tra phép cộng - Trường hợp pass', () => {
        const result = PhepToan.tong(3, 5);
        expect(result).toBe(8); // Kết quả mong đợi là 8
    });

    test('Kiểm tra phép trừ - Trường hợp pass', () => {
        const result = PhepToan.hieu(3, 5);
        expect(result).toBe(-2); // Kết quả mong đợi là -2
    });
});
