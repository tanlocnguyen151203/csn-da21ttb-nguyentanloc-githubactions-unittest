const util = require( 'util');
const { PhepToan } = require("./pheptoan");

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
