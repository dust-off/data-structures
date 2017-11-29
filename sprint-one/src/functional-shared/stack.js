var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.data = {};
  newStack.counter = 0;
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  size: function() {
    return this.counter;
  },
  
  push: function(value) {
    this.data[this.counter] = value;
    this.counter++;
  },
  
  pop: function() {
    var popped;
    if (this.counter > 0) {
      this.counter--;
      popped = this.data[this.counter];
    }
    return popped;
  }
};


