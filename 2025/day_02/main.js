import fs from "node:fs";

function isRepeatedPattern(num, exactReps = null, minReps = 2) {
  const str = String(num);
  const len = str.length;

  for (let patternLen = 1; patternLen < len; patternLen++) {
    if (len % patternLen !== 0) continue;

    const reps = len / patternLen;

    // Check for exact repetitions OR minimum repetitions
    if (exactReps !== null) {
      if (reps !== exactReps) continue;
    } else {
      if (reps < minReps) continue;
    }

    const pattern = str.substring(0, patternLen);

    if (pattern.repeat(reps) === str) {
      return true;
    }
  }

  return false;
}

function calculateInvalidIdSum(ranges, exactReps = null, minReps = 2) {
  let sum = 0;

  for (const range of ranges) {
    const [start, end] = range.trim().split("-").map(Number);

    for (let id = start; id <= end; id++) {
      if (isRepeatedPattern(id, exactReps, minReps)) {
        sum += id;
      }
    }
  }

  return sum;
}

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();
  const ranges = input.split("\n").flatMap((line) => line.split(","));

  const exactlyTwiceSum = calculateInvalidIdSum(ranges, 2, null);
  console.log(`Sum of invalid IDs (exactly 2 repetitions): ${exactlyTwiceSum}`);

  const atLeastTwiceSum = calculateInvalidIdSum(ranges, null, 2);
  console.log(
    `Sum of invalid IDs (at least 2 repetitions): ${atLeastTwiceSum}`,
  );
} catch (error) {
  console.error(error);
}
