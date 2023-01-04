const fs = require("fs");
const tail = require("./tail");
const utils = require("./utils");

try {
    const input = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const tailVisited = tail.getVisitedPositions(input);
    const tailVisitedUnique = utils.removeDuplicates(tailVisited);

    console.log(`Tail visited ${tailVisitedUnique.length} unique position/s.`);
} catch(error) {
    console.log(error);
}