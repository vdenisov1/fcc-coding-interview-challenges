let MaxHeap = function() {
    let heap = [null];
    
    this.insert = function(item){
        heap.push(item);
        
        for(let i = heap.length - 1; i > 1;){
            let element = heap[i];
            let parentIndex = (i % 2 == 0) ? i/2 : (i-1) / 2;
            let parentElement = heap[parentIndex];
            
            if(parentElement < element){
                heap[i] = parentElement;
                heap[parentIndex] = element;
                i = parentIndex;
            }else{
                break;
            }
        }
    }
    
    this.remove = function(){
        if(heap.length < 1)
            return null;

        heap.shift();
        let removed = heap.shift();

        if(heap.length < 1)
            return removed;

        heap.unshift(heap.pop());
        heap.unshift(null);
        
        for(let i = 1; i < heap.length;){
            let leftChildIndex = i * 2;
            let rightChildIndex = leftChildIndex + 1;
            let currentNode = heap[i]
            let leftChild = leftChildIndex < heap.length ? heap[leftChildIndex] : currentNode - 1;
            let rightChild = rightChildIndex < heap.length ? heap[rightChildIndex] : currentNode - 1;
            
            if(leftChild < currentNode && rightChild < currentNode)
                break;

            if(leftChild < rightChild){
                heap[i] = rightChild;
                heap[rightChildIndex] = currentNode;
                i = rightChildIndex;
            }else{
                heap[i] = leftChild;
                heap[leftChildIndex] = currentNode;
                i = leftChildIndex;
            }
        }

        return removed;
    }
    
    this.print = function(){
        return heap.slice(1);
    }
};

let test = new MaxHeap();
test.insert(30);
test.insert(300);
test.insert(500);
test.insert(10);

let result = [];
result.push(test.remove());
result.push(test.remove());
result.push(test.remove());
result.push(test.remove());
console.log(test.print());
console.log(result);