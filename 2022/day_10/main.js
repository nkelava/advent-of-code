const fs = require("fs");
const Program = require("./program");

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const program = new Program();
    program.run(input);

    console.log(`Sum of the first six signal strenghts is ${program.measurement.sum}.`);
} catch (error) {
    console.log(error);
}
