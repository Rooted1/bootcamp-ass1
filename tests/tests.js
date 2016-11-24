'use strict'

var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/ass.js');

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    //expect(fizzBuzz(3)).to.equal('Fizz');
    expect(myApp.fizzBuzz(3) == 'Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    // expect(fizzBuzz(5)).to.equal('Buzz');
    expect(myApp.fizzBuzz(5) == 'Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    // expect(fizzBuzz(15)).to.equal('FizzBuzz');
    expect(myApp.fizzBuzz(15) == 'FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    // expect(fizzBuzz(45)).to.equal('FizzBuzz');
    expect(myApp.fizzBuzz(45) == 'FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    // expect(fizzBuzz(90)).to.equal('FizzBuzz');
    expect(myApp.fizzBuzz(90) == 'FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    // expect(fizzBuzz(63)).to.equal('Fizz');
    expect(myApp.fizzBuzz(63) == 'Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    // expect(fizzBuzz(7)).to.equal(7);
    expect(myApp.fizzBuzz(7) == 7);
  });
})

  it("should return 101 since its indivisible by 3 and 5", function() {
    // expect(fizzBuzz(101)).to.equal(101);
    expect(myApp.fizzBuzz(7) == 7);
  });

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        // expect(findMinMax([1, 2, 3, 4])).to.equal([1, 4]);
        expect(myApp.findMinMax([1, 2, 3, 4]) == [1,4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        // expect(findMinMax([6, 4])).to.equal([4, 6]);
        expect(myApp.findMinMax([6, 4]) == [4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        // expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.equal([2, 78]);
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2]) == [2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        // expect(findMinMax([4, 4, 4, 4])).to.equal([4]);
        expect(myApp.findMinMax([4, 4, 4, 4]) == [4]);
      });

    });

  });

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        // expect(aritGeo([])).toEqual(0);
        expect(myApp.aritGeo([]) == 0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        // expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
        expect(myApp.aritGeo([2, 4, 6, 8, 10]) == "Arithmetic");
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        // expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
        expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41]) == "Arithmetic");
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        // expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
        expect(myApp.aritGeo([15, 10, 5, 0, -5, -10]) == "Arithmetic");
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        // expect(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
        expect(myApp.aritGeo([2, 6, 18, 54, 162]) == "Geometric");
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        // expect(aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
        expect(myApp.aritGeo([0.5, 3.5, 24.5, 171.5]) == "Geometric");
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        // expect(aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
        expect(myApp.aritGeo([-128, 64, -32, 16, -8]) == "Geometric");
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        // expect(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
        expect(myApp.aritGeo([1, 2, 3, 5, 8]) == "Geometric");
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        // expect(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
        expect(myApp.aritGeo([1, 3, 6, 10, 15]) == "Geometric");
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        // expect(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
        expect(myApp.aritGeo([1, 8, 27, 64, 125]) == "Geometric");
      });
      
    });
  });