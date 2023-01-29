class Position {
    constructor(row, column, elevation, parent = null) {
        this.row = row;
        this.column = column;
        this.elevation = elevation;
        this.parent = parent;
        this.neighbours = [];
        this.gScore = 0;
        this.hScore = 0;
        this.fScore = 0;
    }

    addNeighbour(row, column, elevation, parent) {
        const neighbour = new Position(row, column, elevation, parent)
        this.neighbours.push(neighbour);
    }

    setNeighbours(heightmap) {
        const up = this.row - 1;
        const right = this.column + 1;
        const down = this.row + 1;
        const left = this.column - 1;

        if(up > 0) {
            this.addNeighbour(up, this.column, heightmap.getElevation(up, this.column), this);
        }

        if(right < heightmap.width) {
            this.addNeighbour(this.row, right, heightmap.getElevation(this.row, right), this);
        }

        if(down < heightmap.height) {
            this.addNeighbour(down, this.column, heightmap.getElevation(down, this.column), this);
        }

        if(left > 0) {
            this.addNeighbour(this.row, left, heightmap.getElevation(this.row, left), this);
        }
    }

    calculateScores(end) {
        this.calculateGScore();
        this.calculateHScore(end);
        this.calculateFScore();
    }

    calculateGScore() {
        this.gScore = (this.parent) ? this.parent.gScore + 1 : 0;
    }

    calculateHScore(end) {
        this.hScore = Math.abs(end.row - this.row) + Math.abs(end.column - this.column);
    }

    calculateFScore() {
        this.fScore = this.gScore + this.hScore;
    }

    isEqual(other) {
        return (this.row === other.row && this.column === other.column);
    } 
}

module.exports = Position;
