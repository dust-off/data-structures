

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
    // console.log(this.count);
    //resize and re-establish
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
  if (this.count / this._limit >= .25 && this._limit > 8) {
    // console.log(this.count);
    //resize and re-establish
    //this.refactor(.5);
  }
};

HashTable.prototype.refactor = function(num) {
  //store existing length
  var length = this._limit * num;
  //create a new hastable ???? push to array and then to an overwritten table
  //console.log(this._storage);
  var tempStorage = [];
  for(var key in this._storage) {
    console.log(key)
  }
  // for (var i = 0; i < this._limit; i++) {
  //   if (this._storage[i] !== undefined) {
  //     console.log(this._storage[i]);
  //   }
  // }
  //for loop 6 vs 8
  // for (var bucket in this._storage) {
  //   console.log(bucket, ' . ', typeof bucket);
  //   if (typeof bucket === 'function') {
  //     console.log(bucket);
  //   }
    // bucket.forEach(item => {
    //   arr.push([item[0], item[1]]);
    // });
  // }
  // console.log(this._storage[2][0][0], ' . ', this._storage[2][0][1]);
  //for each node
    //add to the new hastable
  //overwrite existing table
  //double || halve stored length and set it in the new table
};
// Object.defineProperty(HashTable.prototype.get, enumerable, false)


/*
 * Complexity: What is the time complexity of the above functions?
 
 -insert, retrieve, remove : If it's the first item at that hash -- O(1);
                           : If it's not the first -- 0(n) to the index, 0(1) to the table;
 */