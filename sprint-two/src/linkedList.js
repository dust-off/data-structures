var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addTo = function(value, direction) {
    var samePos; //'head/tail';
    var sameDir; //'previous/next';
    var oppisitePos;
    var oppisiteDir;
    if (direction === 'tail') {
      samePos = 'tail';
      sameDir = 'previous';
      oppisitePos = 'head';
      oppisiteDir = 'next';
    } else { //add to the head
      samePos = 'head';
      sameDir = 'next';
      oppisitePos = 'tail';
      oppisiteDir = 'previous';
    }
    var newNode = Node(value);
    if (list.head === null) { //if it's the first node being added
      list[oppisitePos] = newNode;
    } else {
      list[samePos][oppisiteDir] = newNode;
      newNode[sameDir] = list[samePos];
    }
    list[samePos] = newNode;
  };

  list.addToTail = function(value) {
    this.addTo(value, 'tail');
  };
  
  list.addToHead = function(value) {
    this.addTo(value, 'head');
  };

  list.removeHead = function() {
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };
  
  list.removeTail = function() {
    var formerTail = list.tail;
    list.tail = list.tail.previous;
    return formerTail;    
  };

  list.contains = function(target) {
    //function that takes in a node
    var found = false;
    var checker = function(node) {
      if (node.value === target) {
        found = true;
        return true;
      } else if (node.next !== null) {
        checker(node.next);
      } else {
        return false;
      }
    };
    checker(list.head);
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *

- addToTail = 0(1)

- removeHead = 0(1)

- contains = 0(n)

 */
