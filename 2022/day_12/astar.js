const PriorityQueue = require("./priorityQueue");

class AStar {
    constructor() {
        this.priorityQueue = new PriorityQueue();
        this.path = [];
    }

    reconstructPath(current) {
        const totalPath = [];

        while(current) {
            totalPath.unshift(current);
            current = current.parent;
        }

        return totalPath;
    }

    findPath(heightmap) {
        let current = heightmap.start;
        current.calculateScores(heightmap.end);
        this.priorityQueue.enqueue(current);

        while(!this.priorityQueue.isEmpty()) {
            current = this.priorityQueue.front();
            // console.log(`${current.row}, ${current.column}`)

            if(current.isEqual(heightmap.end)) {
                this.path = this.reconstructPath(current);
                break;
            }
            
            this.priorityQueue.dequeue();
            current.setNeighbours(heightmap);

            current.neighbours.forEach(neighbour => {
                neighbour.calculateScores(heightmap.end);

                if(neighbour.fScore <= current.fScore) {
                    if(!this.priorityQueue.find(neighbour)) {
                        this.priorityQueue.enqueue(neighbour);
                    }
                }
            });
        }
    }
}

module.exports = AStar;
