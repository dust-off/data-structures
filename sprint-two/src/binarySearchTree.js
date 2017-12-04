var logger = function(obj){
  console.log(obj);
}


var BinarySearchTree = function(value) {
  var tracker;
  var obj = {
    value: value,
    leftCounter: 0,
    rightCounter: 0,
    left: {},
    right: {}
  };

  extend(obj, binarySearchTreeMethods);
  return obj;
};

//a method is just a function bound to an object?
var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  logger('inserting: ', value)
  if (value === this.value) {
    logger('-value already exists');
    return -Infinity;
  } else if (this.value < value) {        //GO RIGHT*****

    if (this.right.value !== undefined) {
      logger('  Going right')
      var pass = this.right.insert(value);

      if(Array.isArray(pass)) {
        logger('');
        logger('     -------------------');
        logger("     send to reball: ", pass)
        logger('');
        this.reBal(pass[1])
        pass = pass[0]
      }

      if(pass > 0) {
        if(this.rightCounter < pass + 1) {
          this.rightCounter = pass + 1; //SET count right
          var bal = this.onBalance(this);
          return [pass, bal];
        }
      }
      return pass + 1;
    } else {              //ADD RIGHT
      this.rightCounter ++;
      logger('  adding right');
      this.right = BinarySearchTree(value);
    }

  } else {                                //GO LEFT*****
    if (this.left.value !== undefined) {
      logger('  Going left');
      var pass = this.left.insert(value);

      // if(Array.isArray(pass) {
      //   this.reBal(pass[1])
      //   pass = pass[0]
      // }

      if(Array.isArray(pass)) {
        logger('');
        logger('     -------------------');
        logger("     send to reball: ", pass)
        logger('');
        this.reBal(pass[1])
        pass = pass[0]
      }

      if(pass > 0) {
        if(this.rightCounter < pass + 1) {
          this.leftCounter = pass + 1;  //SET count left
          logger(this.onBalance(this));
        }
      }
      return pass + 1;
    } else {              //ADD LEFT
      this.leftCounter = this.leftCounter + 1;
      logger('  adding left');
      this.left = BinarySearchTree(value);
    }
  }
  logger('finishing up with: ', value)
  logger('');
  return 1;
};

binarySearchTreeMethods.onBalance = function() {
  var toLeft = this.leftCounter || 1;
  var toRight = this.rightCounter || 1;
  if (toRight / toLeft >= 2 || toLeft / toRight >= 2) {
    logger('  *onBalance: ')
    logger(this)

    var array = [];
    var func = function(value) { array.push(value); };
    this.depthFirstLog(func)

    logger('     **belowME: ', array);
    logger('    left : ', this.leftCounter);
    logger('    right : ', this.rightCounter);

    return array;
  }
};

binarySearchTreeMethods.contains = function(findThis) {
  if (this.value === findThis) {
    return true;
  } else {
    if (findThis < this.value) {
      return this.contains.call(this.left, findThis);
    } else if (findThis > this.value) {
      return this.contains.call(this.right, findThis);
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left.value !== undefined) {
    this.depthFirstLog.call(this.left, cb);
  }
  if (this.right.value !== undefined) {
    this.depthFirstLog.call(this.right, cb);
  }
};

binarySearchTreeMethods.reBal = function(arr){

  if(this.left.value === arr[0]) {
    this.left = {};
    this.leftCounter = 0;
  } else {
    this.right = {};
    this.rightCounter = 0;
  }

  arr.sort(function compareNumbers(a, b) {
    return a - b;
  })
  var middKey = Math.floor(arr.length / 2)
  var midItem = arr.splice(middKey, 1)
  arr.unshift(midItem[0])

  for(var i = 0; i < arr.length; i++){
    this.insert(arr[i])
  }
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var testBinary = BinarySearchTree(9);
logger('logging: ', testBinary.insert(3));
logger('');
logger('logging: ', testBinary.insert(3));
logger('');
logger('logging: ', testBinary.insert(1));
logger('');

logger('logging: ', testBinary.insert(12));
logger('');
logger('logging: ', testBinary.insert(15));
logger('');
logger('logging: ', testBinary.insert(19));
logger('');


//*******************************
// var testArray = [9,18,11,12,19] //[9,11,12,18,19]
// function tempTest(arr){
//   arr.sort(function compareNumbers(a, b) {
//   return a - b;
// })
//   logger(arr)
//   var midd = Math.floor(arr.length / 2)
//   logger(midd)
//   var cut = arr.splice(midd, 1)
//   arr.unshift(cut[0])
//   logger(arr)
//   for(var i = 0; i < testArray.length; i++){
//
//   }
// }
// tempTest(testArray)


/*
 * Complexity: What is the time complexity of the above functions?

 - insert : O(log(n))

 - contains : O(log(n))

 - depthFirst : linear

 */
