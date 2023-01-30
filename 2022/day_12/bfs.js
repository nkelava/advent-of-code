const Queue = require("./queue");

class BFS {
    constructor() {
        this.path = [];
    }

    reconstructPath(current) {
        let path = [];

        while(current.parent) {
            // console.log(`(${current.row}, ${current.column})`)
            path.push(current);
            current = current.parent;
        }

        path.reverse().forEach(point => console.log(`(${point.row}, ${point.column})`))

        return path;
    }

    findPath(heightmap) {
        let current = heightmap.start;
        const queue = new Queue();
        queue.enqueue(current);
        const visited = new Queue();

        while(!queue.isEmpty()) {
            current = queue.front();
            // console.log(`(${current.row}, ${current.column})`)
            if(current.isEqual(heightmap.end)) {
                this.path = this.reconstructPath(current);
                break;
            }

            queue.dequeue();
            visited.enqueue(current);
            current.setNeighbours(heightmap);

            current.neighbours.forEach(neighbour => {
                if(!visited.find(neighbour)) {
                    queue.enqueue(neighbour);
                }
            });
        }
    }
}

module.exports = BFS;
