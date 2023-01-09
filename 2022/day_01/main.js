const fs = require("fs");

function partOne(calories) {
    return calories.sort((a, b) => b - a)[0];
}

function partTwo(calories) {
    return calories.slice(0, 3).reduce((previous, current) => previous + current, 0);
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").trim().split("\n\n");
    const calorieTotals = input.map((elf) => {
        return elf.split("\n").map(Number).reduce((previous, current) => previous + current, 0);
    });

    console.log("Most calories that elf is carrying: ", partOne(calorieTotals));
    console.log("Top 3 elves calorie total: ", partTwo(calorieTotals));
} catch (err) {
    console.error(err);
}

// Commented section is a solution I played with afterwards. Just another solution that poped in my head that I wanted to check.
// Wanted to see is it possible to calculate sum immediately while reading the file (first part of the task only).

// const rl = require("readline");
// const file = rl.createInterface({
//     input: fs.createReadStream("./input.txt"),
//     output: process.stdout,
//     terminal: false
// });
// let maxCaloriesTotal = 0, elfCaloriesTotal = 0;

// file.on("line", line => {
//     if(line !== "") {
//         elfCaloriesTotal += Number(line);
//         return;
//     }

//     maxCaloriesTotal = Math.max(maxCaloriesTotal, elfCaloriesTotal);
//     elfCaloriesTotal = 0;
//     console.log(maxCaloriesTotal);
// });
