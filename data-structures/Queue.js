function Queue() {
    let collection = [];

    this.print = function() { 
        console.log(collection);
    }

    this.isEmpty = function(){
        return collection.length === 0;
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        if(!this.isEmpty()) {
            return collection[0];
        }

        return null;
    }

    this.size = function(){
        return collection.length;
    }
}

let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(11);
myQueue.print();
console.log(`Front of Queue: ${myQueue.front()}`);
myQueue.dequeue();
console.log(`Front of Queue: ${myQueue.front()}`);
myQueue.dequeue();
console.log(`Size of Queue: ${myQueue.size()}`);