const fs = require("fs");
const forest = require("./forest");

function get2DMap(input) {
    const mapHeight = input.length;
    const mapWidth = input[9].length;
    const map = Array.from(Array(mapHeight), () => new Array(mapWidth));
    
    input.forEach((row, index) => map[index] = [...row]);
    
    return map;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const map = get2DMap(input);
    const visibleTreeCount = forest.countVisibleTrees(map);

    console.log(`Number of trees that are visible from outside the grid is ${visibleTreeCount}.`);
} catch(error) {
    console.error(error);
}