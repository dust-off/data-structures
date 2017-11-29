var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.data = {};
  newQueue.counter = 0;
  newQueue.max = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.enqueue = function(value) {
  this.data[this.max] = value;
  this.counter++;
  this.max++;
};

queueMethods.dequeue = function() {
  var dequeued;
  if (this.counter > 0) {
    this.counter--;
    dequeued = this.data[Object.keys(this.data)[0]];
    delete this.data[Object.keys(this.data)[0]];
  }
  return dequeued;
};