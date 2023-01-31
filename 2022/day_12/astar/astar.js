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
        current.calculateScores(heightmap.end);
        const openSet = new PriorityQueue();
        const closedSet = new PriorityQueue();

        openSet.enqueue(current);

        while(openSet.isEmpty() === false) {
            current = openSet.front();
            console.log(`${current.row}, ${current.column}`)

            if(current.isEqual(heightmap.end)) {
                this.path = this.reconstructPath(current);
                break;
            }
            
            openSet.dequeue();
            closedSet.enqueue(current);
            current.setNeighbours(heightmap);
            const temp = new PriorityQueue();

            current.neighbours.forEach(neighbour => {
                neighbour.calculateScores(heightmap.end);

                if(!openSet.find(neighbour)) {
                    openSet.enqueue(neighbour);
                }
                
                // if(neighbour.fScore <= current.fScore) {
                //     if(!this.priorityQueue.find(neighbour)) {
                //         this.priorityQueue.enqueue(neighbour);
                //     }
                // }
            });

            // for(let i = 0; i < temp.queue.length; i++) {
            //     const neighbour = temp.queue[i];

            //     if(!closedSet.find(neighbour)) {
            //         openSet.enqueue(neighbour);
            //     }
            // }
        }
    }
}

module.exports = AStar;
