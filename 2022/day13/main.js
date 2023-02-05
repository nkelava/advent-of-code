const fs = require("fs");

try {
    const packets = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    
    console.log(packets);
} catch (error) {
    console.error(error);
}
