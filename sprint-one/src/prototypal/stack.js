var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.data = {};
  newStack.counter = 0;
  
  return newStack;
};

var stackMethods = {
  size: function () {
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
      delete this.data[this.counter];
    }
    return popped;
  }
};


