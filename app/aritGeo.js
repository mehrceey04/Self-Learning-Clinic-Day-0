module.exports = {
  aritGeo : function(myArray) {
    var diff = myArray[1] - myArray[0];     //common difference for AP
    var ratio = myArray[1] / myArray[0];    //common ratio for GP
    if(myArray.length === 0) {
      return 0;
    }
    for(var i = 2; i < myArray.length; i++) {
      if(myArray[i + 1] - myArray[i] === diff) {
        return "Arithmetic";
      }
      if(myArray[i + 1] / myArray[i] === ratio) {
        return "Geometric";
      }
      else{
        return -1;
      }
    }
  }
}
