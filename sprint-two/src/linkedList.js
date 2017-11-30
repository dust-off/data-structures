var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *

- addToTail = 0(1)

- removeHead = 0(1)

- contains = 0(n)

 */
