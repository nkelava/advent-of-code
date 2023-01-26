const Position = require("./position");

class AStar {
    constructor(heightmap) {
        this.heightmap = heightmap;
        this.start = this.findPosition(heightmap, "S");
        this.end = this.findPosition(heightmap, "E");
        this.elevationDifference = 1;
        this.fscore = 0;
        this.gscore = 0;
        this.visited = [];
    }

    findPosition(heightmap, symbol) {
        for(let row = 0; row < heightmap.length; row++) {
            for(let column = 0; column < heightmap[0].length; column++) {
                if(heightmap[row][column] === symbol) {
                    return new Position(row, column);
                }
            }
        }
        return null;
    }
}

module.exports = AStar;
