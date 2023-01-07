const fs = require("fs");
const Knot = require("./point");

function simulateSeriesOfMotions(instructions, knotCount, startX, startY) {
    const rope = new Array(knotCount).fill(null).map(() => new Knot(startX, startY));
    let head = rope[0], tail = rope[1];
    let direction, steps;

    instructions.forEach(instruction => {
        instruction = instruction.split(" ");
        direction = instruction[0];
        steps = Number(instruction[1]);
        
        for(let i = 0; i < steps; ++i) {
            head.move(direction);
       
            if(tail.calculateDistance(head) > 1) {
                tail.updatePosition(head.x, head.y);
            }
        }
    });

    return rope;
}

try {
    const input = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").split("\n");
    let knotCount = 2;
    const result = simulateSeriesOfMotions(input, knotCount, 0, 0);
    const tail = result.at(-1);
    const tailVisitedUnique = tail.getVisitedUnique();
    
    console.log(`Tail visited ${tailVisitedUnique.length} unique position/s.`);
} catch(error) {
    console.log(error);
}