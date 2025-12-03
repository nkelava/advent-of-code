import fs from "node:fs";

function getInvalidIdsInRange(start, end) {
  const invalidIds = [];
  const startLen = String(start).length;
  const endLen = String(end).length;

  const minPatternLen = Math.ceil(startLen / 2);
  const maxPatternLen = Math.ceil(endLen / 2);

  // For each possible pattern length (half of total digits)
  for (
    let patternLen = minPatternLen;
    patternLen <= maxPatternLen;
    patternLen++
  ) {
    const minPattern = Math.pow(10, patternLen - 1);
    const maxPattern = Math.pow(10, patternLen) - 1;

    for (let pattern = minPattern; pattern <= maxPattern; pattern++) {
      // Skip patterns with leading zeros (like 01)
      if (String(pattern).length !== patternLen) continue;

      // Create the repeated ID (e.g. 123 -> 123123)
      const repeatedId = Number(String(pattern) + String(pattern));

      // Check if this ID falls within our range
      if (repeatedId >= start && repeatedId <= end) {
        invalidIds.push(repeatedId);
      }

      if (repeatedId > end) break;
    }
  }

  return invalidIds;
}

function calculateInvalidIdSum(ranges) {
  let sum = 0;

  for (const range of ranges) {
    const [start, end] = range.trim().split("-").map(Number);

    const invalidIds = getInvalidIdsInRange(start, end);
    sum += invalidIds.reduce((acc, id) => acc + id, 0);
  }

  return sum;
}

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();

  const ranges = input.split("\n").flatMap((line) => line.split(","));
  const sum = calculateInvalidIdSum(ranges);
  console.log(`Sum of invalid IDs: ${sum}`);
} catch (error) {
  console.error(error);
}
