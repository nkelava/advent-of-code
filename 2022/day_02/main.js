const fs = require("fs");

// OPONENT          RESPONSE(PART 1)    REPONSE(PART 2)     POINTS(SYMBOL)      POINTS(ENDING) 
// A - rock         X - rock            X - lose            +1 - rock           +0 - lose
// B - paper        Y - paper           Y - draw            +2 - papare         +3 - draw
// C - scissors     Z - scissors        Z - win             +3 - scissors       +6 - win

const possibilitiesResponse = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6
}

const possibilitiesEnding = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7
}

function getTotalPoints(handsPlayed, possibilities) {
    return handsPlayed.reduce((sum, hand) => sum + possibilities[hand], 0);
}

try {
    const handsPlayed = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").trim().split("\n");
    const responseSum = getTotalPoints(handsPlayed, possibilitiesResponse);
    const endingSum = getTotalPoints(handsPlayed, possibilitiesEnding);

    console.log("Total sum playing response strategy: ", responseSum);
    console.log("Total sum playing ending strategy: ", endingSum);
} catch (err) { 
    console.error(err);
}