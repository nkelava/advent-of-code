const fs = require("fs");
const KeepAway = require("./keepaway");

try {
    const notes = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const keepAway = new KeepAway(notes);

    // keepAway.play();
    
    console.log(keepAway.monkeys);
} catch (error) {
    console.error(error);
}