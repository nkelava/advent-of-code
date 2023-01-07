class Knot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = [[x, y]];
    }

    updatePosition(x, y) {
        this.x += (this.x < x) ? 1 : (this.x > x) ? -1 : 0;
        this.y += (this.y < y) ? 1 : (this.y > y) ? -1 : 0;

        this.updateVisited(this.x, this.y);
    }

    updateVisited(x, y) {
        this.visited.push([x, y]);
    }

    calculateDistance(other) {
        return Math.floor(Math.sqrt(Math.pow(other.x - this.x, 2) + (Math.pow(other.y - this.y, 2))));
    }

    isDiagonal(other) {
        return Math.abs(this.y - this.x) === Math.abs(other.y - other.x);
    }

    move(direction) {
        switch(direction) {
            case "U":
                ++(this.y);
                break;
            case "R":
                ++(this.x);
                break;
            case "D":
                --(this.y); 
                break;
            case "L":
                --(this.x);
                break;
        }

        this.updateVisited(this.x, this.y);
    }

    getVisitedUnique() {
        return this.visited.map(JSON.stringify).filter((knot, i , visited)=> i === visited.indexOf(knot)).map(JSON.parse);
    }
}

module.exports = Knot;
