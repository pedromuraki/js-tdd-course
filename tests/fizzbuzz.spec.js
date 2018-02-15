import { expect } from 'chai';
import fizzbuzz from '../src/js/fizzbuzz';

describe('FizzBuzz', () => {

  it('should return "Fizz" when the number is divisible by 3 only', () => {
    expect(fizzbuzz(9)).to.be.equal('Fizz');
    expect(fizzbuzz(9)).to.be.equal('Fizz');
    expect(fizzbuzz(12)).to.be.equal('Fizz');
  });

  it('should return "Buzz" when the number is divisible by 5 only', () => {
    expect(fizzbuzz(25)).to.be.equal('Buzz');
    expect(fizzbuzz(50)).to.be.equal('Buzz');
  });

  it('should return "FizzBuzz" when the number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the number itself when not divisible by 3 or 5', () => {
    expect(fizzbuzz(4)).to.be.equal(4);
    expect(fizzbuzz(8)).to.be.equal(8);
    expect(fizzbuzz(19)).to.be.equal(19);
  });

});
