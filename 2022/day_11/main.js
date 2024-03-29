const fs = require("fs");
const KeepAway = require("./keepaway");

try {
    const notes = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    // Set isRelieved to true if you want to test part 1 of the task OR set it to false if you want to test part 2 of the task
    const isRelieved = true;
    const rounds = (isRelieved) ? 20 : 10000;
    const keepAway = new KeepAway(notes, rounds, isRelieved);

    keepAway.play();

    console.log(`The level of monkey business after ${rounds} rounds is ${keepAway.calculateMonkeyBusiness()}.`);
} catch (error) {
    console.error(error);
}