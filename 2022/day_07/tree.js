class TreeNode {
    constructor(id, name, parent) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.size = 0;
        this.children = [];
    }
    
    increaseSize(size, node = this) {
        if(node === null) return;
        
        node.size += size;

        this.increaseSize(size, node.parent);
    }
}

class Tree {
    constructor(name) {
        this.size = 0;
        this.root = new TreeNode(this.size, name, null);
    }

    *preOrderTraversal(node = this.root) {
        yield node;

        if (node.children.length) {
          for (const child of node.children) {
            yield* this.preOrderTraversal(child);
          }
        }
    }

    insert(parentId, name) {
        for (const node of this.preOrderTraversal()) {
          if (parentId === node.id) {
            node.children.push(new TreeNode(++this.size, name, node));
            return true;
          }
        }

        return false;
    }

    sumSizeLowerThan(limit) {
        let sum = 0;

        for(const node of this.preOrderTraversal()) {
            if(node.size < limit) {
                sum += node.size;
            }
        }

        return sum;
    }

    find(parentId, name) {
        if (name === "/") {
            return this.preOrderTraversal().next().value;
        }

        for (const node of this.preOrderTraversal()) {
            if(node.parent === null) continue;
            if (node.parent.id === parentId && node.name === name) {
                return node;
            }
        }

        return null;
    }

    findGreaterOrEqualSize(size) {
        let closestNode = this.preOrderTraversal().next().value;
        let minDifference = closestNode.size;
        let difference = 0;

        for(let node of this.preOrderTraversal()) {
            if(node.size < size) continue;

            difference = node.size - size; 
            
            if(difference < minDifference) {
                closestNode = node;
                minDifference = difference;
            }
        }

        return closestNode;
    }
}

module.exports = Tree;
