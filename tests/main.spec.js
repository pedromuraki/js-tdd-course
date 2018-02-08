const expect = require('chai').expect;

let arr;
beforeEach(function() {
  arr = [1, 3, 22, 50];
});

// describe('Main', function() {
//   describe('Method A', function() {
    context('Array Case', function() {
      it('should have a length of 5 when another value is pushed', function() {
        arr.push(65);
        expect(arr).to.have.lengthOf(5);
      });

      it('should not have the value 22 when the last value is popped', function() {
        arr.pop();
        expect(arr).to.not.include(22);
      });
    });

//     context('Case 2', function() {
//       it('should happen y', function() {

//       });
//     });
//   });
// });
