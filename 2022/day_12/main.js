const fs = require("fs");
const AStar = require("./astar/astar");
const Heightmap = require("./common/heightmap");
const BFS = require("./bfs/bfs");

try {
    const map = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n").map(row => row.split(""));
    const start = { mark: "S", elevation: "a" }
    const end = { mark: "E", elevation: "z" };
    const startingElevation = "a";
    const heightmap = new Heightmap(map, start, end);
    // Change isAstar to:
    //      - true to test A* algorithm
    //      - false to test BFS algorithm
    const isAstar = false;
    const algorithm = (isAstar) ? new AStar() : new BFS();

    let path = algorithm.findPath(heightmap);
    console.log(`Fewest steps required to move to the location: ${path.length}.`);

    path = algorithm.findMinPathFromElevation(heightmap, startingElevation);
    console.log(`Fewest steps required to move to the location from elevation "${startingElevation}": ${path.length}`);
} catch (error) {
    console.log(error);
}
