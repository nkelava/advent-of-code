const fs = require("fs");
const Knot = require("./point");

function moveSubsequentKnots(rope) {
    let previousKnot, knot;
    
    for(let knotIndex = 1; knotIndex < rope.length; ++knotIndex) { // Start from 1 because head is on index 0
        knot = rope[knotIndex];
        previousKnot = rope[knotIndex - 1];
    
        if(knot.calculateDistance(previousKnot) > 1) {
            knot.updatePosition(previousKnot.x, previousKnot.y);
        }
    }
}

function simulateSeriesOfMotions(instructions, knotCount, startX, startY) {
    const rope = new Array(knotCount).fill(null).map(() => new Knot(startX, startY));
    const head = rope[0];
    let direction, stepCount;

    instructions.forEach(instruction => {
        [direction, stepCount] = instruction.split(" ");
        
        for(let i = 0; i < stepCount; ++i) {
            head.move(direction);
            moveSubsequentKnots(rope);
        }
    });

    return rope;
}

try {
    const input = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").split("\n");
    // To toggle part one and part two just change a value of knotCount variable.
    // In part one knot count is 2 and in part two it is 10.
    const knotCount = 10;
    const rope = simulateSeriesOfMotions(input, knotCount, 0, 0);
    const tail = rope.at(-1);
    const tailVisitedUnique = tail.getVisitedUnique();
    
    console.log(`Tail visited ${tailVisitedUnique.length} unique position/s.`);
} catch(error) {
    console.log(error);
}