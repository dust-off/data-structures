

var HashTable = function() {
  this._limit = 8;
  this.count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var exists = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    for (var x = 0; x < this._storage[index].length; x++) {
      if (this._storage[index][x][0] === k) {
        this._storage[index][x][1] = v;
        exists = true;
      }
    }
    if (exists === false) {
      this._storage[index].push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var result;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      result = bucket[i][1];
      i = bucket.length;
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i] = [];
      i = bucket.length;
    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 
 -insert, retrieve, remove : If it's the first item at that hash -- O(1);
                           : If it's not the first -- 0(n) to the index, 0(1) to the table;
 */