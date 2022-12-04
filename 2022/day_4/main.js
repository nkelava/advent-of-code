const fs = require("fs");

function checkIfFullyIncluded(first, second) {
    return first.every(el => second.includes(el));
}

function countFullyContainedSections(sections) {
    const fullyContainedSectionsCount = sections.reduce((counter, sections) => {
        const intersection = sections[0].filter(section => sections[1].includes(section));

        return (intersection.length === sections[0].length || intersection.length === sections[1].length) ? counter + 1 : counter;

        // Other solution I wanted to try
        // const firstCheck = checkIfFullyIncluded(sections[0], sections[1]);
        // const secondCheck = checkIfFullyIncluded(sections[1], sections[0]);
        // return (firstCheck || secondCheck) ? counter + 1 : counter;
    }, 0);

    return fullyContainedSectionsCount;
}

function getSectionRange(lowerbound, size) {
    return Array.from(new Array(size), (_, i) => i + lowerbound);
}

function parseInput(input) {
    const inputParsed = input
    .map(pair => pair.split(",")
        .map(pairSections => pairSections.split("-"))
        .map(sections => {
            const lowerbound = Number(sections[0]);
            const size = Number(sections[1]) - Number(sections[0]) + 1;

            return getSectionRange(lowerbound, size);
    }));

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