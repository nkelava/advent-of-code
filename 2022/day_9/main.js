const fs = require("fs");
const tail = require("./tail");

try {
    const input = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const tailVisited = tail.getVisitedPositions(input, 2);
    
    console.log(tailVisited);

    console.log(`Tail visited ${tailVisited.length} unique position/s.`);
} catch(error) {
    console.log(error);
}