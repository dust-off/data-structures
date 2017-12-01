

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log(k, ' . ', v);
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('--------');
  console.log(k.length);
  console.log(getIndexBelowMaxForKey('bobbob', this._limit));
  console.log(getIndexBelowMaxForKey('val2', this._limit));
  console.log('--------');
  
  this._storage[index] = v; 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


// var v1 = 'val1';
// var v2 = 'val2';
// var oldHashFunction = window.getIndexBelowMaxForKey;
// window.getIndexBelowMaxForKey = function() { return 0; };
// hashTable.insert(v1, v1);
// hashTable.insert(v2, v2);
// expect(hashTable.retrieve(v1)).to.equal(v1);
// expect(hashTable.retrieve(v2)).to.equal(v2);
// window.getIndexBelowMaxForKey = oldHashFunction;