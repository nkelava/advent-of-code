const fs = require("fs");

function findMarkerStart(datastream, markerLength) {
    for(let index = 0; index < datastream.length - (markerLength - 1); ++index) {
        const sequence = new Set([...datastream.slice(index, index + markerLength)]);
        
        if(sequence.size === markerLength) return index;
    }
    return "Marker not found.";
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n\n")[0];
    const sopMarkerLength = 4;
    const somMarkerLength = 14;

    const charCountBeforeSoP = findMarkerStart(input, sopMarkerLength) + sopMarkerLength;
    const charCountBeforeSoM = findMarkerStart(input, somMarkerLength) + somMarkerLength;

    console.log(`Character count before the first start-of-packet marker is ${charCountBeforeSoP}.`);
    console.log(`Character count before the first start-of-message marker is ${charCountBeforeSoM}.`);
} catch (error) {
    console.error(error);
}