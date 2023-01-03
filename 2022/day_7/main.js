const fs = require("fs");
const customFileSystem = require("./filesystem");

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const sizeLimit = 100001;
    const fileSystemTree = customFileSystem.createFileSystemTree(input);

    console.log(`Sum of all directories with size lower than ${sizeLimit - 1} is ${fileSystemTree.sumSizeLowerThan(sizeLimit)}.`);
} catch(error) {
    console.error(error);
}
