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
  console.log(this);
};

treeMethods.contains = function(target) {
  var truthy = false;
  var recurSearch = function(node) {
    // console.log('node = ', node);
    if (node.value === target) {
      truthy = true;
      return true;
    } else if (node.children) {
      // for (var x = 0; x < node.children.length; x++) {
      //   if (recurSearch(node.children[x])) {
      //     return true;
      //   } 
      // }
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
 */
