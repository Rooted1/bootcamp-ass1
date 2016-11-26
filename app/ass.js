module.exports = {
    fizzBuzz : function (num){
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } 
    else if(num % 3 === 0){
      return "Fizz";
    }
    else if(num % 5 === 0) {
      return "Buzz";
    }
    else {
      return num;
    }
  },

  findMinMax : function (arr){
    var result = [];
    var min = arr[0];
    var max = arr[0];



    for(var i = 0; i <= arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
          max = arr[i];
        }
    }
    
    if (max == min){
        result.push(min);
    }
    else {
        result.push(min, max);
    }

    return result;
  },

  aritGeo : function (arr) {
    if (arr.length == 0) {
        return 0;
    }
    
    var aritDiff = arr[1] - arr[0];
    var geoRatio = arr[1] / arr[0];

    var arit = true;
    var geo = true;

    for(var i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] - arr[i] !== aritDiff) {
            arit = false;
        }
        if (arr[i + 1] / geoRatio !== arr[i]) {
            geo = false;
        }
    }

        if (arit === true) {
            return "Arithmetic";
        }
        else if (geo === true) {
            return "Geometric";
        } else {
            return -1;
        }
    }
}