const fs = require("fs");

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    
    console.log(monkeys);
} catch (error) {
    console.error(error);
}