const fs = require("fs");

function checkIfFullyIncluded(first, second) {
    return first[0] >= second[0] && first[first.length - 1] <= second[second.length - 1];
}

function countFullyContainedSections(sections) {
    const fullyContainedSectionsCount = sections.reduce((counter, sections) => {
        const firstInSecondCheck = checkIfFullyIncluded(sections[0], sections[1]);
        const secondInFirstCheck = checkIfFullyIncluded(sections[1], sections[0]);

        return (firstInSecondCheck || secondInFirstCheck) ? counter + 1 : counter;
    }, 0);

    return fullyContainedSectionsCount;
}

function parseInput(input) {
    const inputParsed = input
    .map(pair => pair.split(",")
        .map(pairSections => pairSections.split("-"))
        .map(sections => [Number(sections[0]), Number(sections[1])]));

    return inputParsed;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").trim().split("\n");
    const inputParsed = parseInput(input);
    const fullyContainedSectionsCount = countFullyContainedSections(inputParsed);
    
    console.log("Total number of fully contained sections is: ", fullyContainedSectionsCount);
} catch (err) {
    console.error(err);
}