module.exports = {
  findMinMax : function(myArray) {
    var max = myArray[0];
    var min = myArray[0];
    var resultArray = [];
    for(var i = 0; i < myArray.length; i++) {
      if(myArray[i] > max) {
        max = myArray[i];
      }
      if(myArray[i] < min) {
        min = myArray[i];
      }
    }
    if(min === max) {
    return [min];
  }
  resultArray.push(min);
  resultArray.push(max);
  return resultArray;
  }
}