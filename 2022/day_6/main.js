const fs = require("fs");

function findSoPMarker(datastream) {
    for(let index = 0; index < datastream.length - 3; ++index) {
        const sequence = new Set([...datastream.slice(index, index + 4)]);
        
        if(sequence.size === 4) return index + 4;
    }
    return "Start of packet marker not found.";
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n\n")[0];

    const characterCount = findSoPMarker(input);

    console.log(characterCount);
} catch (error) {
    console.error(error);
}