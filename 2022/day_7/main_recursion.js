const fs = require("fs");
const Tree = require("./tree");
const customFileSystem = require("./filesystem");

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const sizeLimit = 100001;
    let fileSystemTree = new Tree("/");
    fileSystemTree = customFileSystem.createFileSystemTreeRecursion(input, 0, fileSystemTree, fileSystemTree.root);

    console.log(`Sum of all directories with size lower than ${sizeLimit - 1} is ${fileSystemTree.sumSizeLowerThan(sizeLimit)}.`);
} catch(error) {
    console.error(error);
}
