const fs = require("fs");

function get2DMap(input) {
    const mapHeight = input.length;
    const mapWidth = input[9].length;
    const map = Array.from(Array(mapHeight), () => new Array(mapWidth));
    
    input.forEach((row, index) => map[index] = [...row]);
    
    return map;
}

function checkEdge(map, rowIndex, treeIndex) {
    const height = map.length - 1;
    const width = map[0].length - 1;

    return (rowIndex === 0 || rowIndex === height || treeIndex === 0 || treeIndex === width);
}

function checkHorizontal(row, treeIndex, direction) {
    start = (direction === "left") ? 0 : treeIndex + 1;
    end = (direction === "left") ? treeIndex : row.length;

    for(let i = start; i < end; ++i) {
        if(Number(row[i]) >= Number(row[treeIndex])) {
            return false;
        }
    }
    return true;
}

function checkVertical(map, row, column, direction) {
    start = (direction === "up") ? 0 : row + 1;
    end = (direction === "up") ? row : map.length;

    for(let i = start; i < end; ++i) {
        if(Number(map[i][column]) >= Number(map[row][column])) {
            return false;
        }
    }
    return true;
}

function checkIfVisible(map, rowIndex, treeIndex) {
    return (checkEdge(map, rowIndex, treeIndex)
    || checkHorizontal(map[rowIndex], treeIndex, "left") 
    || checkHorizontal(map[rowIndex], treeIndex, "right")
    || checkVertical(map, rowIndex, treeIndex, "up")
    || checkVertical(map, rowIndex, treeIndex, "down"));
}

function countVisibleTrees(map) {
    let visibleTreeCounter = 0;

    map.forEach((row, rowIndex) => {
        row.forEach((_, treeIndex) => {
            if (checkIfVisible(map, rowIndex, treeIndex)) {
                ++visibleTreeCounter;
            }
        });
    })

    return visibleTreeCounter;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const map = get2DMap(input);
    const visibleTreeCount = countVisibleTrees(map);

    console.log(`Number of trees that are visible from outside the grid is ${visibleTreeCount}.`);
} catch(error) {
    console.error(error);
}