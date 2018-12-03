function PriorityQueue() {
    let collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.enqueue = function(elementWithPriority){
        let priority = elementWithPriority[1];
        let element = elementWithPriority[0];

        this.initializeCollectionWithPriorities(priority);
        collection[priority-1].push(element);
    }

    this.dequeue = function() {
        for(let i = 0; i < collection.length; i++){
            let queue = collection[i];

            if(queue.length > 0)
                return queue.shift();
        }

        return null;
    }

    this.size = function() {
        let totalSize = 0;

        for(let i = 0; i < collection.length; i++){
            totalSize += collection[i].length;
        }

        return totalSize;
    }

    this.isEmpty = function() {
        return this.size() === 0;
    }

    this.initializeCollectionWithPriorities = function(lowestPriority){
        if(collection.length < lowestPriority) {
            for(let i = collection.length - 1; i < lowestPriority; i++){
                collection.push([]);
            }
        }
    }
}

let args = [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]];
let myPriorityQueue = new PriorityQueue();

for(let arg of args){
    myPriorityQueue.enqueue(arg);
}

myPriorityQueue.print();
console.log(`Next queue item: ${myPriorityQueue.dequeue()}`);
console.log(`Next queue item: ${myPriorityQueue.dequeue()}`);
console.log(`Next queue item: ${myPriorityQueue.dequeue()}`);
console.log(`Next queue item: ${myPriorityQueue.dequeue()}`);
console.log(myPriorityQueue.size());