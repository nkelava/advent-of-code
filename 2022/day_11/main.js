const fs = require("fs");
const KeepAway = require("./keepaway");

try {
    const notes = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const isRelieved = true;
    const rounds = (isRelieved) ? 20 : 10000;
    const keepAway = new KeepAway(notes, rounds, isRelieved);

    keepAway.play();

    console.log(`The level of monkey business after ${rounds} rounds is ${keepAway.calculateMonkeyBusiness()}.`);
} catch (error) {
    console.error(error);
}