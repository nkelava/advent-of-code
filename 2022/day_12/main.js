const fs = require("fs");
const AStar = require("./astar");

try {
    const heightmap = fs.readFileSync("./test.txt", "utf-8").replace(/\r/g, "").split("\n");

    const astar = new AStar(heightmap);

    console.log(`Start: (${astar.start.column}, ${astar.start.row})\nEnd: (${astar.end.column}, ${astar.end.row})`);
} catch (error) {
    console.log(error);
}
