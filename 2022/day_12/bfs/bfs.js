const Queue = require("./queue");

class BFS {
    constructor() {
    }

    reconstructPath(current) {
        let path = [];

        while(current) {
            path.push(current);
            current = current.parent;
        }

        return path;
    }

    findPath(heightmap) {
        let current = heightmap.start;
        let neighbour = null;
        const queue = new Queue();
        const visited = new Queue();

        queue.enqueue(current);
        visited.enqueue(current);

        while(!queue.isEmpty()) {
            current = queue.dequeue();
            current.setNeighbours(heightmap);

            for(let i = 0; i < current.neighbours.length; i++) {
                neighbour = current.neighbours[i];

                if(visited.find(neighbour)) continue;
            
                if(neighbour.isEqual(heightmap.end)) {
                    return this.reconstructPath(current);
                }

                queue.enqueue(neighbour);
                visited.enqueue(neighbour);
            }
        }

        return [];
    }

    findMinPathFromElevation(heightmap, startingElevation) {
        const positions = heightmap.getPositionsByElevation(startingElevation);
        heightmap.start = positions[0];
        let path = this.findPath(heightmap);
        let shortestPath = path;

        for(let i = 1; i < positions.length; i++) {
            heightmap.start = positions[i];
            path = this.findPath(heightmap);
            
            if(path.length > 0) {
                if(path.length < shortestPath.length) {
                    shortestPath = path;
                }
            }
        }

        return shortestPath;
    }
}

module.exports = BFS;
