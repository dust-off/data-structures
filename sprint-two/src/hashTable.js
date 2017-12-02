

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
  this.count++;
  if (this.count / this._limit >= .75) {
    this.refactor(2);
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
  this.count --;
  if (this.count / this._limit <= .25 && this._limit > 8) {
    this.refactor(.5);
  }
};

HashTable.prototype.refactor = function(num) {
  
  var length = this._limit * num;
  var oldStorage = this._storage;
  
  this._limit = length;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
  
  for (var bucket in oldStorage) {
    if (typeof oldStorage[bucket] !== 'function') {
          
      for (var douple in oldStorage[bucket]) {
        var pair = oldStorage[bucket][douple];
        if (pair.length > 0) {
          this.insert(pair[0], pair[1]);
        }
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 
 -insert, retrieve, remove : If it's the first item at that hash -- O(1);
                           : If it's not the first -- 0(n) to the index, 0(1) to the table;
 */