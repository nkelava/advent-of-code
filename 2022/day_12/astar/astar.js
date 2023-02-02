const { hrtime } = require("process");
const PriorityQueue = require("./priorityQueue");

class AStar {
    constructor() {
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
                    return this.reconstructPath(current);
                }

                neighbour.calculateScores(heightmap.end);
                openSet.enqueue(neighbour);
            };
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

module.exports = AStar;
