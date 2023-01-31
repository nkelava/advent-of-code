const Queue = require("./queue");

class BFS {
    constructor() {
        this.path = [];
    }

    reconstructPath(current) {
        let path = [];

        while(current.parent) {
            path.push(current);
            current = current.parent;
        }

        return path;
    }

    findPath(heightmap) {
        let current = heightmap.start;
        const queue = new Queue();
        queue.enqueue(current);
        const visited = new Queue();
        visited.enqueue(current);
        let neighbour = null;

        while(!queue.isEmpty()) {
            current = queue.dequeue();
            current.setNeighbours(heightmap);

            for(let i = 0; i < current.neighbours.length; i++) {
                neighbour = current.neighbours[i];

                if(visited.find(neighbour)) continue;
            
                if(neighbour.isEqual(heightmap.end)) {
                    this.path = this.reconstructPath(current);
                    return;
                }

                queue.enqueue(neighbour);
                visited.enqueue(neighbour);
            }
        }
    }
}

module.exports = BFS;
