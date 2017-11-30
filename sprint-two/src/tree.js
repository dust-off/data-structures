var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var truthy = false;
  var recurSearch = function(node) {
    if (node.value === target) {
      truthy = true;
      return true;
    } else if (node.children) {
      node.children.forEach(function(child) {
        return recurSearch(child);
      });
    } else {
      return false;
    }
  };
  recurSearch(this);   
  return truthy;
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 - addChild() = 0(1);
 
 - contains() = 0(n);
 
 */
