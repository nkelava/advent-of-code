const fs = require("fs");

function get2DMap(input) {
    const mapHeight = input.length;
    const mapWidth = input[9].length;
    const map = Array.from(Array(mapHeight), () => new Array(mapWidth));

    input.forEach((row, index) => map[index] = [...row]);

    return map;
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

function checkVertical(map, x, y, direction) {
    start = (direction === "up") ? 0 : x + 1;
    end = (direction === "up") ? x : map.length;

    for(let i = start; i < end; ++i) {
        if(Number(map[i][y]) >= Number(map[x][y])) {
            return false;
        }
    }
    return true;
}

function countVisibleTrees(map) {
    let counter = 0;
    const height = map.length - 1;
    const width = map[0].length - 1;

    map.forEach((row, rowIndex) => {
        row.forEach((tree, treeIndex) => {
            if(rowIndex === 0 || rowIndex === height || treeIndex === 0 || treeIndex === width) {
                ++counter;
                return;
            }

            if(
                checkHorizontal(row, treeIndex, "left") 
                || checkHorizontal(row, treeIndex, "right")
                || checkVertical(map, rowIndex, treeIndex, "up")
                || checkVertical(map, rowIndex, treeIndex, "down")) {
                            ++counter;
            }
            return;
        });
    })

    return counter;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const map = get2DMap(input);
    const visibleTreeCounter = countVisibleTrees(map);

    console.log(`Number of trees that are visible from outside the grid is ${visibleTreeCounter}.`);
} catch(error) {
    console.error(error);
}