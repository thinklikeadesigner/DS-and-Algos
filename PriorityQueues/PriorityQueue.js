function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (newitem) {
      if (this.isEmpty()) {
        return this.collection.push(newitem);
      }
  
      //reverses the array so you can work with array meethhods
      this.collection = this.collection.reverse();
      // find index where new item bigger than old item
      var found_index = this.collection.findIndex(function (item) {
        return newitem[1] >= item[1];
      });
      // if there is no item smaller, push the new item
      if (found_index === -1) {
        this.collection.push(newitem);
      } else {
          // or put the new item behind the first smallest item
        this.collection.splice(found_index, 0, newitem);
      }
      // face the array the right way again
      this.collection = this.collection.reverse();
    };


    this.dequeue = function () {
      if (!this.isEmpty()) {
        return this.collection.shift()[0];
      } else {
        return "The queue is empty.";
      }
    };
    this.size = function () {
      return this.collection.length;
    };
    this.front = function () {
      return this.collection[0][0];
    };
    this.isEmpty = function () {
      return this.size() > 0 ? false : true;
    };
    // Only change code above this line
  }

