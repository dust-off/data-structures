var Queue = function() {
  var someInstance = {};
 
  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var max = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
    length++;
  };

  someInstance.dequeue = function() {
    var dequeued;
    if (length > 0) {
      length--;
      dequeued = storage[Object.keys(storage)[0]];
      delete storage[Object.keys(storage)[0]];
    }
    return dequeued;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
