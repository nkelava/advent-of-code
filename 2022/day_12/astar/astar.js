const PriorityQueue = require("./priorityQueue");

class AStar {
    constructor() {
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
        let neighbour = null;
        const openSet = new PriorityQueue();
        const closedSet = new PriorityQueue();
        
        current.calculateScores(heightmap.end);
        openSet.enqueue(current);

        while(!openSet.isEmpty()) {
            current = openSet.dequeue();
            closedSet.enqueue(current);
            
            current.setNeighbours(heightmap);
            
            for(let i = 0; i < current.neighbours.length; i++) {
                neighbour = current.neighbours[i];
                
                if(openSet.find(neighbour)) continue;
                if(closedSet.find(neighbour)) continue;

                if(neighbour.isEqual(heightmap.end)) {
                    this.path = this.reconstructPath(current);
                    return;
                }

                neighbour.calculateScores(heightmap.end);
                openSet.enqueue(neighbour);
            };
        }
    }
}

module.exports = AStar;
