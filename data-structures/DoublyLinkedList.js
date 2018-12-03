let Node = function(data, prev){
    this.data = data;
    this.prev = prev;
    this.next = null;
};

let DoublyLinkedList = function(){
    this.head = null;
    this.tail = null;

    this.add = function(element){
        let node = new Node(element, null);

        if(this.head === null){
            this.head = node; 
        }else if(this.tail === null){
            node.prev = this.head;
            this.head.next = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    this.remove = function(element){
        if(this.head !== null){
           let iterator = this.head;
           
           while(iterator !== null){
               if(iterator.data === element){
                   if(iterator.prev === null){
                       if(iterator.next === null){
                           this.head = null; this.tail = null;
                       }else if(iterator.next.next === null){
                           this.head = iterator.next; 
                           this.tail = null;
                       }else{
                           this.head = iterator.next;
                       }
                   }else if(iterator.next === null){
                       iterator.prev.next = null;
                       this.tail = null;
                   }else{
                       iterator.prev.next = iterator.next;
                       iterator.next.prev = iterator.prev;
                   }
               }
               
               iterator = iterator.next;
           }
        }else{
            return null;
        }
    }

    this.reverse = function(element){
        if(this.head === null)
            return null;
        if(this.tail === null)
            return;
        
        let iterator = this.head;
        this.head = this.tail;
        this.tail = iterator;

        while(iterator != null){
            let prev = iterator.prev;
            let next = iterator.next;
            iterator.next = prev;
            iterator.prev = next;
            iterator = next;
        }
    }

    this.print = function(){
        let iterator = this.head;

        while(iterator != null){
            console.log(iterator.data);
            iterator = iterator.next;
        }
    }
}

let list = new DoublyLinkedList();
list.add('test');
list.add('test2');
list.add('test3');
list.add('test4');
list.reverse();
list.print();
