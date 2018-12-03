function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    this.head = function(){
        return head;
    }

    this.size = function(){
        return length;
    }

    this.add = function(element){
        let node = new Node(element);
        let iterator = head;

        for(let i = 1; i < length; i++){
            iterator = iterator.next;
        }

        if (iterator === null){
            head = node;
        }else{
            iterator.next = node;
        }
        
        length++;
    }

    this.remove = function(element){ 
        let iterator = head;
        let last = null;

        while (iterator !== null){
            if (iterator.element === element){
                this.replaceLink(last, iterator.next);
            }

            last = iterator;
            iterator = iterator.next;
        }
    }

    this.replaceLink = function(last, next){
        if(last === null){
            head = next;
        }else{
            last.next = next;
        }

        length--;
    }

    this.indexOf = function(element){
        let iterator = head;
        let index = 0;

        while (iterator !== null){
            if (iterator.element === element){
                return index;
            }

            iterator = iterator.next;
            index++;
        }

        return -1;
    }

    this.elementAt = function(index){
        let iterator = head;

        for(let i = 0; i < index; i++){
            iterator = iterator.next;
        }

        return iterator.element;
    }

    this.removeAt = function(index){
        if(index < 0 || index >= length)
            return null;

        let iterator = head;
        let last = null;

        for(let i = 1; i <= index; i++){
            last = iterator;
            iterator = iterator.next;
        }

        this.replaceLink(last, iterator.next);
        return iterator.element;
    }

    this.addAt = function(element, index){
        if(!isFinite(index) || index < 0 || index >= length)
            return false;

        let node = new Node(element);
        let iterator = head;
        let last = null;

        for(let i = 1; i <= index; i++){
            last = iterator;
            iterator = iterator.next;
        }

        node.next = iterator;

        if(last === null){
            head = node;
        }else{
            last.next = node;
        }

        length++;

        return true;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.print = function(){
        let iterator = head;

        while(iterator !== null){
            console.log(iterator.element);
            iterator = iterator.next;
        }
    }
}

let list = new LinkedList();
list.add('test');
list.add('me');
list.print();
console.log("\n");
list.addAt('ttt',0);
console.log(list.head().element);
list.addAt('ttt2', 0);
console.log(list.head().element);