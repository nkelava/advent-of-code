const Point = require("./point");

function getVisitedPositions(instructions, pointCount) {
    const points = new Array(pointCount).fill(null).map(() => new Point(0, 0));
    let direction, steps, previousHeadPosition;

    instructions.forEach(instruction => {
        instruction = instruction.split(" ");
        direction = instruction[0];
        steps = Number(instruction[1]);
        
        for(let i = 0; i < steps; ++i) {
            previousHeadPosition = new Point(points[0].x, points[0].y);
            
            points[0].move(direction);
       
            if(points[0].calculateDistance(points[1]) > 1) {
                points[1].setPosition(previousHeadPosition);
            }
        }
    });
    return points[1].getVisitedUnique();
}

module.exports = {
    getVisitedPositions
}
