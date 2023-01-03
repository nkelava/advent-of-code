const fs = require("fs");
const customFileSystem = require("./filesystem");

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const sizeLimit = 100001;
    const fileSystemTree = customFileSystem.createFileSystemTree(input);

    const sizeToRemove = 30000000 - (70000000 - fileSystemTree.root.size); 
    const directoryToRemove = customFileSystem.findDirectoryToDelete(fileSystemTree, sizeToRemove);

    console.log(`Sum of all directories with size lower than ${sizeLimit - 1} is ${fileSystemTree.sumSizeLowerThan(sizeLimit)}.`);
    console.log(`Closest total size of the directory that has to be deleted is ${directoryToRemove.size}.`);
} catch(error) {
    console.error(error);
}
