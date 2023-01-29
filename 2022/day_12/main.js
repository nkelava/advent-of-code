const fs = require("fs");
const AStar = require("./astar");
const Heightmap = require("./heightmap");

try {
    const map = fs.readFileSync("./test.txt", "utf-8").replace(/\r/g, "").split("\n");
    const start = { mark: "S", elevation: "a" }
    const end = { mark: "E", elevation: "z" };
    const heightmap = new Heightmap(map, start, end);
    const astar = new AStar();

    astar.findPath(heightmap);
    
    console.log(astar.path.length)
} catch (error) {
    console.log(error);
}
