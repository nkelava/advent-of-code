const point = require("./point");

function getVisitedPositions(instructions) {
    let head = [0, 0], tail = [0, 0], tailVisited = []; 
    let direction, steps, previousHeadPosition;

    instructions.forEach(instruction => {
        instruction = instruction.split(" ");
        direction = instruction[0];
        steps = Number(instruction[1]);
        
        for(let i = 0; i < steps; ++i) {
            previousHeadPosition = [...head];

            point.move(head, direction);
       
            if(point.calculateDistance(head, tail) > 1) {
                tail = previousHeadPosition;
                tailVisited.push(tail);
            }
        }
        
    })

    return tailVisited;
}

module.exports = {
    getVisitedPositions
}
