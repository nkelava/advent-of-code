const Position = require("./position");

class Heightmap {
    constructor(heightmap, start, end) {
        this.map = heightmap;
        this.start = this.findPosition(heightmap, start.mark, start.elevation);
        this.end = this.findPosition(heightmap, end.mark, end.elevation);
        this.elevationDifferenceUp = 1;
        this.height = heightmap.length;
        this.width = heightmap.at(0).length;
    }

    findPosition(heightmap, mark, elevation) {
        for(let row = 0; row < heightmap.length; row++) {
            for(let column = 0; column < heightmap[0].length; column++) {
                if(heightmap[row][column] === mark) {
                    return new Position(row, column, elevation);
                }
            }
        }
        return null;
    }

    getElevation(row, column) {
        return this.map[row][column];
    }
}

module.exports = Heightmap;
