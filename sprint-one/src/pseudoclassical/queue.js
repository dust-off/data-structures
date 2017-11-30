var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.library = {};
  this.lastBook = 0;
  this.totalBooks = 0;
};

Queue.prototype.size = function() {
  return this.lastBook;
};

Queue.prototype.enqueue = function(book) {
  this.library[this.totalBooks] = book;
  this.lastBook++;
  this.totalBooks++;
};

Queue.prototype.dequeue = function() {
  var libraryCard;
  if (this.lastBook > 0) {
    this.lastBook--;
    libraryCard = this.library[Object.keys(this.library)[0]];
    delete this.library[Object.keys(this.library)[0]];
  }
  return libraryCard;
};
