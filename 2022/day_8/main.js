const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

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

function checkHorizontal(row, treeIndex) {
    let foundGreaterCount = 0;

    for(let i = 0; i < row.length; ++i) {
        if(i === treeIndex) continue;

        if(Number(row[i]) >= Number(row[treeIndex])) {
            ++foundGreaterCount;
            i = (i < treeIndex) ? treeIndex : row.length;
        }
    }

    return (foundGreaterCount > 1) ? false : true;
}

function checkVertical(map, row, column) {
    let foundGreaterCount = 0;

    for(let i = 0; i < map.length; ++i) {
        if (i === row) continue;

        if(Number(map[i][column]) >= Number(map[row][column])) {
            ++foundGreaterCount;
            i = (i < row) ? row : map.length;
        }
    }

    return (foundGreaterCount > 1) ? false : true;
}

function checkIfVisible(map, rowIndex, treeIndex) {
    return (checkEdge(map, rowIndex, treeIndex)
    || checkHorizontal(map[rowIndex], treeIndex)
    || checkVertical(map, rowIndex, treeIndex));
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