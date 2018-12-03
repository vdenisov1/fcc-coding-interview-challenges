class CircularQueue {
    
    constructor(size){
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size;

        for(let i = 0; i < size; i++){
            this.queue.push(null);
        }
    }

    print(){
        console.log(this.queue);
    }

    enqueue(item){
        let writeIndex = this.write % this.max;

        if(this.queue[writeIndex] !== null){
            console.log('Cannot write to queue');
            return null;
        }

        
        return this.addItemAtIndex(item, writeIndex);
    }

    dequeue(){       
        let readIndex = this.read % this.max;

        if (this.queue[readIndex] === null){
            console.log('Cannot read from queue');
            return null;
        }

        return this.removeItemAtIndex(readIndex);;
    }

    addItemAtIndex(item, index){
        this.queue[index] = item;
        this.write++;
        return this.queue[index];
    }

    removeItemAtIndex(index){
        let value = this.queue[index];
        this.queue[index] = null;
        this.read++;
        return value;
    }
}

let queue = new CircularQueue(5);

for(let i = 0; i < 10; i++){
    queue.enqueue(i);
    queue.print();
}

console.log('Finished Writes, now to Reads');

for(let i = 0; i < 10; i++){
    queue.dequeue();
    queue.print();
}

queue.dequeue();