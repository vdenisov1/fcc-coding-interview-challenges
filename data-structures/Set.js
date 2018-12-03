function Set() {
    let collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(item) {
        if(!this.has(item)){
            collection.push(item);
            return true;
        }

        return false;
    }

    this.remove = function(item){
        if(this.has(item)){
            let indexOfElement = collection.indexOf(item);
            collection = collection.slice(0, indexOfElement).concat(collection.slice(indexOfElement + 1));
            return true;
        }

        return false;
    }
    
    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet){
        let values = otherSet.values().concat(this.values());
        let unionSet = new Set();

        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    this.intersection = function(otherSet) {
        let intersectionSet = new Set();
        let thisValues = this.values();

        for(let i = 0; i < thisValues.length; i++){
            if(otherSet.has(thisValues[i]))
                intersectionSet.add(thisValues[i]);
        }

        return intersectionSet;
    }

    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let allValues = otherSet.values().concat(this.values());

        for (let i = 0; i < thisValues.length; i++) {
            if (!otherSet.has(allValues[i]) && !this.has(allValues[i])) 
                differenceSet.add(thisValues[i]);
        }

        return differenceSet;
    }

    this.subset = function(otherSet) {
        let values = this.values();
        let subset = true;

        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i]))
                subset = false;
        }

        return subset;
    }
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
set.print();
set.remove(5);
set.print();
set.remove(2);
set.print();
console.log(set.size());
let set2 = new Set();
set.add(1);
set.add(5);
let union = set.union(set2);
union.print();