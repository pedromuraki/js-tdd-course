import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/js/calc';

describe('Calc', () => {

  // smoke tests (check if the methods exists)
  describe('Smoke Tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
    });
    it('should exist the method sub', () => {
      expect(sub).to.exist;
    });
    it('should exist the method mult', () => {
      expect(mult).to.exist;
    });
    it('should exist the method div', () => {
      expect(div).to.exist;
    });
  });

  // check if the methods are working
  describe('Check methods', () => {
    it('should return 5 when sum(2, 3)', () => {
      expect(sum(2, 3)).to.be.equal(5);
    });
    it('should return 1 when sub(3, 2)', () => {
      expect(sub(3, 2) === 1).to.be.true;
    });
    it('should return 9 when mult(3, 3)', () => {
      expect(mult(3, 3) === 9).to.be.true;
    });
    context('Sub', () => {
      it('should return 3 when div(9, 3)', () => {
        expect(div(9, 3)).to.be.equal(3);
      });
      it('should not be divided by zero', () => {
        expect(div(9, 0)).to.be.equal('0 não pode ser dividido ou divisor');
      });
    });
  });

});
