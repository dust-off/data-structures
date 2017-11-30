var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lineCook = {};
  this.lastDudeInLine = 0;
};

Stack.prototype.size = function() {
  return this.lastDudeInLine;
};

Stack.prototype.push = function(order) {
  this.lineCook[this.lastDudeInLine] = order;
  this.lastDudeInLine++;
};

Stack.prototype.pop = function() {
  var order;
  if (this.lastDudeInLine > 0) {
    this.lastDudeInLine--;
    order = this.lineCook[this.lastDudeInLine];
    delete this.lineCook[this.lastDudeInLine];
  }
  return order;
};