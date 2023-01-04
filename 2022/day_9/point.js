function calculateDistance(pointA, pointB) {
    return Math.floor(Math.sqrt(Math.pow(pointB[0]-pointA[0], 2) + (Math.pow(pointB[1] - pointA[1], 2))));
}

function move(point, direction) {
    switch(direction) {
        case "U":
            ++point[1];
            break;
        case "R":
            ++point[0];
            break;
        case "D":
            --point[1]; 
            break;
        case "L":
            --point[0];
            break;
    }
}

module.exports = {
    move,
    calculateDistance
}
