import { assert } from 'chai';

import { add, subtract, multiply, divide } from '../calc.js';

describe('calculator addition', () => {
  it('0 + 0', () => {
    const result = add(0, 0);
    assert.equal(result, 0);
  });
  it('0 + 1', () => {
    const result = add(0, 1);
    assert.equal(result, 1);
  });
  it('1 + 1', () => {
    const result = add(1, 1);
    assert.equal(result, 2);
  });
  it('1 + 5', () => {
    const result = add(1, 5);
    assert.equal(result, 6);
  });
  it('5 + 1', () => {
    const result = add(5, 1);
    assert.equal(result, 6);
  });
});

describe('calculator subtraction', () => {
  it('0 - 0', () => {
    const result = subtract(0, 0);
    assert.equal(result, 0);
  });
  it('0 - 1', () => {
    const result = subtract(0, 1);
    assert.equal(result, -1);
  });
  it('1 - 0', () => {
    const result = subtract(1, 0);
    assert.equal(result, 1);
  });
  it('1 - 5', () => {
    const result = subtract(1, 5);
    assert.equal(result, -4);
  });
  it('5 - 1', () => {
    const result = subtract(5, 1);
    assert.equal(result, 4);
  });
});

describe('calculator multiplication', () => {
  it('0 x 0', () => {
    const result = multiply(0, 0);
    assert.equal(result, 0);
  });
  it('0 x 1', () => {
    const result = multiply(0, 1);
    assert.equal(result, 0);
  });
  it('1 x 0', () => {
    const result = multiply(1, 0);
    assert.equal(result, 0);
  });
  it('1 x 1', () => {
    const result = multiply(1, 1);
    assert.equal(result, 1);
  });
  it('1 x 5', () => {
    const result = multiply(1, 5);
    assert.equal(result, 5);
  });
  it('5 x 1', () => {
    const result = multiply(5, 1);
    assert.equal(result, 5);
  });
  it('2 x 3', () => {
    const result = multiply(2, 3);
    assert.equal(result, 6);
  });
  it('3 x 2', () => {
    const result = multiply(3, 2);
    assert.equal(result, 6);
  });
});

describe('calculator division', () => {
  it('0 / 0', () => {
    const result = divide(0, 0);
    assert.isNaN(result, 0);
  });
  it('0 / 1', () => {
    const result = divide(0, 1);
    assert.equal(result, 0);
  });
  it('1 / 0', () => {
    const result = divide(1, 0);
    assert.equal(result, Infinity);
  });
  it('1 / 1', () => {
    const result = divide(1, 1);
    assert.equal(result, 1);
  });
  it('1 / 5', () => {
    const result = divide(1, 5);
    assert.closeTo(result, 0.2, 0.005);
  });
  it('5 / 1', () => {
    const result = divide(5, 1);
    assert.equal(result, 5);
  });
  it('2 / 3', () => {
    const result = divide(2, 3);
    assert.closeTo(result, 0.666, 0.005);
  });
  it('3 / 2', () => {
    const result = divide(3, 2);
    assert.closeTo(result, 1.5, 0.005);
  });
  it('6 / 2', () => {
    const result = divide(6, 2);
    assert.equal(result, 3);
  });
});
