function Stack() {
    let collection = [];
    
    this.print = function(){
        console.log(collection);
    }

    this.push = function(element){
        collection.push(element);
    }

    this.pop = function(){
        return collection.pop();
    }

    this.isEmpty = function(){
        return collection.length === 0;
    }

    this.clear = function(){
        collection = [];
    }

    this.peek = function(){
        if(!this.isEmpty()){
            return collection[collection.length-1];
        }

        return null;
    }
}

let myStack = new Stack();
myStack.push("test");
myStack.print();
console.log(myStack.isEmpty());
console.log(myStack.peek());