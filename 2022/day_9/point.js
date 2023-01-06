const { urlToHttpOptions } = require("url");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = [];
    }

    setPosition(point) {
        this.x = point.x;
        this.y = point.y;

        this.updateVisited(point);
    }

    getPosition() {
        return [this.x, this.y];
    }

    updateVisited(point) {
        this.visited.push(point);
    }

    calculateDistance(other) {
        return Math.floor(Math.sqrt(Math.pow(other.x - this.x, 2) + (Math.pow(other.y - this.y, 2))));
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
        console.log(`[${this.x}, ${this.y}]`)
        this.updateVisited(new Point(this.x, this.y));
    }

    getVisitedUnique() {
        return this.visited.map(JSON.stringify).filter((point, i , visited)=> i === visited.indexOf(point)).map(JSON.parse);
    }
}

module.exports = Point;
