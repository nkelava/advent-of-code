const fs = require("fs");
const AStar = require("./astar/astar");
const Heightmap = require("./common/heightmap");
const BFS = require("./bfs/bfs");

try {
    const map = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const start = { mark: "S", elevation: "a" }
    const end = { mark: "E", elevation: "z" };
    const heightmap = new Heightmap(map, start, end);

    // const astar = new AStar();

    // astar.findPath(heightmap);
    // console.log(astar.path.length)

    const bfs = new BFS();
    bfs.findPath(heightmap);
    console.log(bfs.path.length + 1);
} catch (error) {
    console.log(error);
}
