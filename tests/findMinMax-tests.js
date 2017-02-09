(function() {
  'use strict'

  var myApp = require('../app/findMinMax.js');

  describe('Min-Max Numbers in a List: ', function () {
    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
      it('should return [0, 99] for [90, 10, 0, 99, 81]', function () {
        expect(myApp.findMinMax([90, 10, 0, 99, 81])).toEqual([0, 99]);
      });

      it('should return [-9, 0] for [0, -9, -3]', function () {
        expect(myApp.findMinMax([0, -9, -3])).toEqual([-9, 0]);
      });

      it('should return [3, 28] for [3, 6, 9, 12, 15, 18, 21, 24, 27, 28]', function () {
        expect(myApp.findMinMax([3, 6, 9, 12, 15, 18, 21, 24, 27, 28])).toEqual([3, 28]);
      });

      it('should return [-6, -1] for [-1, -4, -6, -5]', function () {
        expect(myApp.findMinMax([-1, -4, -6, -5])).toEqual([-6, -1]);
      });

      it('should return [1, 4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {
      it('should return [0] for [0, 0, 0]', function () {
        expect(myApp.findMinMax([0, 0, 0])).toEqual([0]);
      });

      it('should return [4] for [4, 4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-5] for [-5, -5, -5]', function () {
        expect(myApp.findMinMax([-5, -5, -5])).toEqual([-5]);
      });

      it('should return [2] for [2, 2, 2, 2]', function () {
        expect(myApp.findMinMax([2, 2, 2, 2])).toEqual([2]);
      });

      it('should return [88] for [88, 88]', function () {
        expect(myApp.findMinMax([88, 88])).toEqual([88]);
      });

    });

  });

})();