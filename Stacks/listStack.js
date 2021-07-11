// We have arrays in javascript so

// add elements to stack

function reverse(str) {
  let stack = [];
  // push letter into stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  // pop letter from the stack
  let reverseStr = '';
  while (stack.length > 0) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ

// size of stack, just use array.prototype.length

// pop function
pop();
{
  // return top most element in the stack
  // and removes it from the stack
  // Underflow if stack is empty
  if (this.items.length == 0) return 'Underflow';
  return this.items.pop();
}

// peek function
peek();
{
  // return the top most element from the stack
  // but does'nt delete it.
  return this.items[this.items.length - 1];
}

// isEmpty function
isEmpty();
{
  // return true if stack is empty
  return this.items.length == 0;
}

// printStack function
printStack();
{
  var str = '';
  for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
  return str;
}

// build your own solution

var Stack = function () {
  this.top = null;
  this.size = 0;
};

var Node = function (data) {
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function (data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function () {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};
