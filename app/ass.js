module.exports = {
    fizzBuzz : function (num){
   switch (0) {
      case (num % 3 || num % 5):
        return "FizzBuzz";
        break;
        
      case (num % 3):
        return "Fizz";
        break;
          
      case (num % 5):
        return "Buzz";
        break;
            
      default:
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
        if (arr[i + 1] / geoRatio !== arr[i]) {       9
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