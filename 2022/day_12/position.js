class Position {
    constructor(row, column, parent = null) {
        this.row = row;
        this.column = column;
        this.parent = parent;
        this.neighbours = this.getNeighbours();
        this.fScore = 0;
        this.gScore = 0;
    }

    getNeighbours() {
        const neighbours = [
            new Position(this.column, this.row - 1, this),
            new Position(this.column + 1, this.row, this),
            new Position(this.column, this.row + 1, this),
            new Position(this.column - 1, this.row, this),
        ];
        
        return neighbours.filter(neighbour => checkOutOfGrid(neighbour));
    }

    checkOutOfGrid(neighbour) {
        return (neighbour.column < 0 || neighbour.row < 0 || neighbour.column >= heightmap.length || neighbour.row >= heightmap[0].length);
    }
}

module.exports = Position;
