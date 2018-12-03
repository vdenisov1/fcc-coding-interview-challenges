let displayTree = tree => console.log(JSON.stringify(tree, null, 2));

let Node = function() {
    this.keys = new Map();
    this.end = false;

    this.setEnd = function() {
        this.end = true;
    };

    this.isEnd = function() {
        return this.end;
    };
};

let Trie = function () {
    this.root = new Node();

    this.add = function(word){
        if(word === null){
            return;
        }

        let chars = word.split("");
        let node = this.root;

        while(chars.length > 0){
            let char = chars.shift();

            if(!node.keys.has(char)){
                let newNode = new Node();
                node.keys.set(char, newNode);
            }

            node = node.keys.get(char);
        }

        node.setEnd();
    }

    this.isWord = function(word){
        if(word === null || word.length === 0)
            return false;
        
        let node = this.root;
        let chars = word.split('');

        while(chars.length > 0){
            let char = chars.shift();

            if(!node.keys.has(char))
                return false;

            node = node.keys.get(char);
        }

        return node.isEnd();
    }

    function gatherWords(parentWord, node, wordList) {
        let children = node.keys;
        let iterator = children.keys();
        let nextChar = iterator.next();

        while (!nextChar.done){
            let char = nextChar.value;
            let childNode = node.keys.get(char);
            let word = parentWord + char;

            if(childNode.isEnd())
                wordList.push(word);

            gatherWords(word, childNode, wordList);
            nextChar = iterator.next();
        }
    }

    this.print = function(){
        let words = [];
        gatherWords('', this.root, words);
        return words;
    }

};

var test = new Trie();
test.add("hop");
test.add("hops");
test.add("hopped");
test.add("hoppy");
test.add("hope");

console.log("hop",test.isWord("hop"));
console.log("ho (!)",test.isWord("ho"));
console.log("hopped",test.isWord("hopped"));
console.log("hopp (!)",test.isWord("hopp"));
console.log("hoppy",test.isWord("hoppy"));
console.log("hoping (!)",test.isWord("hoping"));

console.log(test.print());