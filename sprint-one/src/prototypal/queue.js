var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.bank = {};
  newQueue.highScore = 0;
  newQueue.currentScore = 0;
  
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.currentScore;
  },
  
  enqueue: function(stuff) {
    this.bank[this.highScore] = stuff;
    this.highScore++;
    this.currentScore++;
  },
  
  dequeue: function() {
    var penaltyBox;
    if (this.currentScore > 0) {
      this.currentScore--;
      penaltyBox = this.bank[Object.keys(this.bank)[0]];
      delete this.bank[Object.keys(this.bank)[0]];
    }
    return penaltyBox;
  }
};


