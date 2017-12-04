var BinarySearchTree = function(value) {
  var tracker;
  var obj = {
    value: value,
    leftCounter: 0,
    rightCounter: 0,
    left: {
      //value: 4
      //depth: 0 + if(parent + 1);
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
  console.log(obj);
  return obj;
};

//a method is just a function bound to an object?
var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  //decides if it should add to left or right
  //set unbalanced after the ++
  //if unblanced === me.value then rebalance
  var highestUnblanced = this.onBalance(this);
  if (highestUnblanced !== undefined) {
    //rebalancer.call(this, highestUnbalanced);
  }
  if (value === this.value) {
    return false;
  } else if (this.value < value) {
    if (this.right.value !== undefined) {
      this.rightCounter ++;
      this.right.insert(value);  
    } else {
      this.rightCounter ++;    
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left.value !== undefined) {
      this.leftCounter ++;
      this.left.insert(value);  
    } else {
      this.leftCounter = this.leftCounter + 1;
      this.left = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.onBalance = function(node) {
  if (node.right.value / node.left.value >= 2 || node.left.value / node.right.value >= 2) {
    return node.value;
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

