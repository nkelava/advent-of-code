const Tree = require("./tree");

function isDirectory(line) {
    return (line.slice(0, 3) === "dir");
}

function isCommand(line) {
    return (line[0] === "$");
}

function handleCommand(fileSystemTree, pwd, line) {
    if(line.slice(2, 4) === "cd") {
        const directoryName = line.slice(5, line.length);
        return (line.includes("..")) ? pwd.parent : fileSystemTree.find(pwd.id, directoryName);
    }
    return pwd;
}

function handleDirectory(fileSystemTree, pwd, line) {
    const directoryName = line.slice(4, line.length);
    fileSystemTree.insert(pwd.id, directoryName);
}

function handleFile(pwd, line) {
    const fileSize = Number(line.slice(0, line.indexOf(" ")));
    pwd.increaseSize(fileSize);
}

function createFileSystemTree(terminalOutput) {
    const fileSystemTree = new Tree("/");
    let pwd = fileSystemTree.root;

    terminalOutput.forEach(line => {
        if(isCommand(line)) {
            pwd = handleCommand(fileSystemTree, pwd, line);
            return;
        }

        (isDirectory(line)) ? handleDirectory(fileSystemTree, pwd, line) : handleFile(pwd, line);
    });
    
    return fileSystemTree;
}

function createFileSystemTreeRecursion(terminalOutput, index, fileSystemTree, pwd) {
    if(index === terminalOutput.length - 1) return fileSystemTree;
    const line = terminalOutput[index];

    if(line[0] !== "$") {
        (line.slice(0, 3) === "dir")
        ? fileSystemTree.insert(pwd.id, line.slice(4, line.length)) // If it is a directory add it to its parent directory
        : pwd.increaseSize(Number(line.slice(0, line.indexOf(" ")))); // If it is a file just increase the size of its parent directory
    } else {
        if(line[0] === "$" && line.slice(2, 4) === "cd") {
            pwd = (line.includes("..")) ? pwd.parent : fileSystemTree.find(pwd.id, line.slice(5, line.length));
        }         
    }
    return createFileSystemTree(terminalOutput, ++index, fileSystemTree, pwd)
}

module.exports = {
    createFileSystemTree,
    createFileSystemTreeRecursion
};
