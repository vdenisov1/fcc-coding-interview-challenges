let Map = function() {
    this.collection = {};

    this.add = function(key, value){
        this.collection[key] = value;
    }

    this.has = function(key){
        return Object.keys(this.collection).indexOf(key) !== -1;
    }

    this.remove = function(key){
        if(this.has(key))
            delete this.collection[key];
    }

    this.get = function(key){
        if(this.has(key))
            return this.collection[key];
        return null;
    }

    this.values = function(){
        let keys = Object.keys(this.collection);
        let arr = [];
        for(let i = 0; i < keys.length; i++){
            arr.push(this.collection[keys[i]]);
        }
        return arr;
    }

    this.size = function(){
        return Object.keys(this.collection).length;
    }

    this.clear = function(){
        this.collection = {};
    }
}