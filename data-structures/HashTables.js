let called = 0;
let hash = (string) => {
    called++;
    var hash = 0;
    for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
    return hash;
};

let HashTable = function(){
    this.collection = {};
    
    this.add = function(key, value){
        let hashValue = hash(key);

        if(!this.keyExists(hashValue)){
            this.collection[hashValue] = {};
        }

        this.collection[hashValue][key] = value;
    }
    
    this.remove = function(key) {
        let hashValue = hash(key);

        if(this.keyExists(hashValue)){
            if(Object.keys(this.collection[hashValue]).indexOf(key) !== -1)
                delete this.collection[hashValue][key];
        }
    }
    
    this.lookup = function(key) {
        let hashValue = hash(key);

        if (this.keyExists(hashValue)) {
            if (Object.keys(this.collection[hashValue]).indexOf(key) !== -1)
                return this.collection[hashValue][key];
        }

        return null;
    }

    this.keyExists = function(key){
        return Object.keys(this.collection).indexOf(key.toString()) > -1;
    }
}

let myHashTable = new HashTable();
myHashTable.add('test', 'me');
myHashTable.add('test2', 'me2');
console.log(myHashTable.lookup('test'))