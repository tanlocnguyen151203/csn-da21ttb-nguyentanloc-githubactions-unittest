// const util = require( 'util');
// const { PhepToan } = require("./pheptoan");

// let soA = 200;
// let soB = 100;


// console.log(util.format(`Kết quả của phép cộng ${soA} + ${soB} là: ${PhepToan.tong(soA, soB)}`));
// console.log(util.format(`Kết quả của phép trừ ${soA} - ${soB} là: ${PhepToan.hieu(soA, soB)}`));
// console.log(util.format(`Kết quả của phép nhân ${soA} * ${soB} là: ${PhepToan.tich(soA, soB)}`));
// console.log(util.format(`Kết quả của phép chia ${soA} / ${soB} là: ${PhepToan.thuong(soA, soB)}`));
// console.log(util.format(`Kết quả của phép cân bậc ${soA} là: ${PhepToan.canBacHai(soA)}`));


const PhepToan = require('../pheptoan');

const a = 3;
const b = 5;

test(`adds ${a} + ${b} to equal ${a + b}`, () => {
  expect(sum(a, b)).toBe(a + b);
});

test(`adds -${a} + ${b} to equal ${b - a}`, () => {
  expect(sum(-a, b)).toBe(b - a);
});

test(`adds ${a} + ${a} to equal ${a + a}`, () => {
  expect(sum(a, a)).toBe(a + a);
});

test(`adds ${a} + ${b} not equal ${a + b + 10}`, () => {
  expect(sum(a, b)).not.toBe(a + b + 10);
});
