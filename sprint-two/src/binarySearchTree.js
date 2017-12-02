var BinarySearchTree = function(value) {
  var obj = {
    value: value,
    left: {
      //value: 4
      //left: {}
      //right: {}
    },
    right: {
      //value: 6
      //left: {}
      //right: {}
    }
  };
  
  extend(obj, binarySearchTreeMethods);
  
  return obj;
};

//a method is just a function bound to an object?
var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  //decides if it should add to left or right
  if (value === this.value) {
    return false;
  } else if (this.value < value) {
    if (this.right.value !== undefined) {
      this.right.insert(value);  
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left.value !== undefined) {
      this.left.insert(value);  
    } else {
      this.left = BinarySearchTree(value);
    }
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

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 - insert : O(log(n))
 
 - contains : O(log(n))
 
 - depthFirst : linear
  
 */

