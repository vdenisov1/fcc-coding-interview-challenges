var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.isLeaf = function(){
        return (this.left === null && this.right === null);
    }
}

function BinarySearchTree() {
    this.root = null;

    function searchMinHeight(root) {
        if(root === null)
            return 0;
        if (root.left === null && root.right === null) 
            return 1;
        if (root.left === null)
            return searchMinHeight(root.right) + 1;
        if (root.right === null)
            return searchMinHeight(root.left) + 1;

        return Math.min(searchMinHeight(root.left), searchMinHeight(root.right)) + 1;
    }

    function searchMaxHeight(root){
        if (root === null)
            return 0;
        if (root.left === null && root.right === null)
            return 1;
        if (root.left === null)
            return searchMaxHeight(root.right) + 1;
        if (root.right === null)
            return searchMaxHeight(root.left) + 1;

        return Math.max(searchMaxHeight(root.left), searchMaxHeight(root.right)) + 1;
    }

    this.findMinHeight = function(){
        if(this.root === null)
            return -1;
        return searchMinHeight(this.root);
    }

    this.isBalanced = function(){
        if(this.root === null)
            return true;
        return Math.abs(searchMaxHeight(this.root) - searchMinHeight(this.root)) < 2; 
    }

    this.findMaxHeight = function(){
        if(this.root === null)
            return -1;
        return searchMaxHeight(this.root);
    }

    this.isPresent = function(element){
        let currentNode = this.root;

        while(currentNode !== null){
            if(currentNode.value === element){
                return true;
            }else if(currentNode.value < element){
                currentNode = currentNode.right;
            }else{
                currentNode = currentNode.left;
            }
        }

        return false;
    }

    this.add = function(element){
        let newNode = new Node(element);
        let currentNode = this.root;

        while(currentNode !== null){
            if(newNode.value < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                }else{
                    currentNode = currentNode.left;
                }
            }else if(newNode.value > currentNode.value){
                if(currentNode.right === null){
                    currentNode.right = newNode;
                }else{
                    currentNode = currentNode.right;
                }
            }else{
                return null;
            }
        }

        if(this.root === null){
            this.root = newNode;
        }

        return undefined;
    }
    
    this.findMax = function(){
        if (this.root === null)
            return null;

        let currentNode = this.root;

        while (currentNode.right !== null){
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    this.findMin = function(){
        if(this.root === null)
            return null;

        let currentNode = this.root;

        while (currentNode.left !== null){
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    function inOrderDFS(root){
        if(root === null)
            return [];

        let leftSubtree = inOrderDFS(root.left);
        let visited = [root.value];
        let rightSubtree = inOrderDFS(root.right);

        return leftSubtree.concat(visited,rightSubtree);
    }

    function preOrderDFS(root) {
        if(root === null)
            return [];
        
            let visited = [root.value];
            let leftSubtree = preOrderDFS(root.left);
            let rightSubtree = preOrderDFS(root.right);

            return visited.concat(leftSubtree, rightSubtree);
    }

    function postOrderDFS(root){
        if (root === null)
            return [];

        let leftSubtree = postOrderDFS(root.left);
        let rightSubtree = postOrderDFS(root.right);
        let visited = [root.value];

        return leftSubtree.concat(rightSubtree, visited);
    }

    this.postorder = function(){
        if(this.root === null)
            return this.root;
        return postOrderDFS(this.root);
    }

    this.inorder = function(){
        if (this.root === null)
            return this.root;
        return inOrderDFS(this.root);
    }

    this.preorder = function(){
        if (this.root === null)
            return this.root;
        return preOrderDFS(this.root);
    }

    function levelOrderBFS(root){        
        let queue = [root];
        let visited = [];
        let currentNode = null;

        while(queue.length > 0){
            currentNode = queue.shift();
            visited.push(currentNode.value);

            if(currentNode.left !== null)
                queue.push(currentNode.left);
            if(currentNode.right !== null)
                queue.push(currentNode.right);
        }

        return visited;
    }

    function reverseLevelOrderBFS(root) {
        let queue = [root];
        let visited = [];
        let currentNode = null;

        while (queue.length > 0) {
            currentNode = queue.shift();
            visited.push(currentNode.value);

            if (currentNode.right !== null) 
                queue.push(currentNode.right);
            if (currentNode.left !== null)
                queue.push(currentNode.left);
        }

        return visited;
    }

    function switchNodes(node, left, right) {
        node.left = right;
        node.right = left;
    }

    function invertTree(root) {
        let queue = [root];
        let currentNode = null;

        while (queue.length > 0) {
            currentNode = queue.shift();

            if (currentNode.left !== null)
                queue.push(currentNode.left);
            if (currentNode.right !== null)
                queue.push(currentNode.right);
            switchNodes(currentNode, currentNode.left, currentNode.right);
        }
    }

    this.invert = function(){
        if(this.root === null)
            return null;
        invertTree(this.root);
    }

    this.levelOrder = function(){
        if(this.root === null)
            return null;
        return levelOrderBFS(this.root);
    }

    this.reverseLevelOrder = function(){
        if (this.root === null)
            return null;
        return reverseLevelOrderBFS(this.root);
    }

    function findMinNode(root){
        if(root === null){
            return null;
        }

        let leftMinNode = findMinNode(root.left);
        let rightMinNode = findMinNode(root.right);

        if(leftMinNode === null && rightMinNode === null)
            return root;
        if(leftMinNode === null)
            return rightMinNode.value < root.value ? rightMinNode : root;
        if(rightMinNode === null)
            return leftMinNode.value < root.value ? leftMinNode : root;
        if(leftMinNode.value < rightMinNode.value)
            return leftMinNode.value < root.value ? leftMinNode : root;
        else
            return rightMinNode.value < root.value ? rightMinNode : root;
    }

    function removeNode(parent, currentNode){
        if(currentNode.right !== null && currentNode.left !== null){
            /* two children case. */
            let minNode = findMinNode(currentNode.right);
            findNodeAndRemove(currentNode, currentNode.right, minNode.value);
            minNode.left = currentNode.left;
            
            if(parent.left !== null && parent.left.value === currentNode.value)
                parent.left = minNode;
            else
                parent.right = minNode;

            let iterator = minNode;

            while (iterator.right !== null){
                iterator = iterator.right;
            }

            iterator.right = currentNode.right;
            return true;
        }

        if(currentNode.left === null && currentNode.right === null){
            /* leaf node case */
            if(parent.left !== null && parent.left.value === currentNode.value)
                parent.left = null;
            else
                parent.right = null;
            return true;
        }
        
        if(currentNode.left !== null){
            /* 1 child node case */
            if(parent.left !== null && parent.left.value === currentNode.value)
                parent.left = currentNode.left;
            else
                parent.right = currentNode.left;
            return true;
        }
        
        if (currentNode.right !== null) {
            /* 1 child node case */
            if (parent.left !== null && parent.left.value === currentNode.value)
                parent.left = currentNode.right;
            else
                parent.right = currentNode.right;
            return true;
        }
    }

    function findNodeAndRemove(parent, currentNode, deleteNodeValue) {
      if (currentNode === null) return false;

      if (currentNode.value === deleteNodeValue) {
        removeNode(parent, currentNode);
        return true;
      }
      
      return findNodeAndRemove(currentNode, currentNode.left, deleteNodeValue) || findNodeAndRemove(currentNode, currentNode.right, deleteNodeValue);
    }

    this.remove = function(nodeValue){
        if(this.root === null)
            return null;

        let node = new Node();
        node.right = this.root;
        let removed = findNodeAndRemove(node, node.right, nodeValue);
        this.root = node.right;
        return removed;
    }
}

let tree = new BinarySearchTree();

tree.add(10);
tree.add(5);
tree.add(15);
tree.remove(10);
displayTree(tree);


