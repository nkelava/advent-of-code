const fs = require("fs");

class TreeNode {
    constructor(id, name, parent = null) {
        this.id = id;
        this.name = name;
        this.parent = parent;
        this.size = 0;
        this.children = [];
    }
    
    increaseSize(size) {
        this.size += size;

        if(this.parent != null) {
            this.increaseAncestorsSize(this.parent, size);
        }
    }

    increaseAncestorsSize(node, size) {
        if(node === null) return;

        node.size += size;
        this.increaseAncestorsSize(node.parent, size);
    }
}

class Tree {
    constructor(name) {
        this.size = 0;
        this.root = new TreeNode(this.size, name);
    }

    *preOrderTraversal(node = this.root) {
        yield node;

        if (node.children.length) {
          for (let child of node.children) {
            yield* this.preOrderTraversal(child);
          }
        }
    }

    insert(parentId, name) {
        for (let node of this.preOrderTraversal()) {
          if (node.id === parentId) {
            node.children.push(new TreeNode(++this.size, name, node));
            return true;
          }
        }
        return false;
    }

    sumOfLowerThan(limit) {
        let sum = 0;

        for(let node of this.preOrderTraversal()) {
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

        for (let node of this.preOrderTraversal()) {
            if(node.parent === null) continue;
            if (node.parent.id === parentId && node.name === name) {
                return node;
            }
        }

        return null;
    }
}

function parseTerminalOutput(terminalOutput) {
    const tree = new Tree("/");
    let pwd = tree.root;

    terminalOutput.forEach(line => {
        if(line[0] === "$") {
            if(line.includes("cd")) {
                pwd = (line.includes("..")) ? pwd.parent : tree.find(pwd.id, line.slice(5, line.length));
                if(pwd === null) pwd = tree.root;
            }
        } 
        else {
            if(line.slice(0, 3) === "dir") {
                tree.insert(pwd.id, line.slice(4, line.length));
            } else {
                pwd.increaseSize(Number(line.slice(0, line.indexOf(" "))));
            }
        }
    });
    return tree;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const limit = 100001;
    const filesystemTree = parseTerminalOutput(input);

    console.log(`Sum of the total directory sizes lower than ${limit - 1} is ${filesystemTree.sumOfLowerThan(limit)}.`);
} catch(error) {
    console.error(error);
}
