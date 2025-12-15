import fs from "node:fs";

function checkAdjecentPositions(diagram, row, column) {
  let count = 0;

  if (diagram[row - 1]) {
    if (diagram[row - 1][column - 1] === "@") count++;
    if (diagram[row - 1][column] === "@") count++;
    if (diagram[row - 1][column + 1] === "@") count++;
  }

  if (diagram[row + 1]) {
    if (diagram[row + 1][column - 1] === "@") count++;
    if (diagram[row + 1][column] === "@") count++;
    if (diagram[row + 1][column + 1] === "@") count++;
  }

  if (diagram[row][column - 1]) {
    if (diagram[row][column - 1] === "@") count++;
  }

  if (diagram[row][column + 1]) {
    if (diagram[row][column + 1] === "@") count++;
  }

  return count < 4 ? 1 : 0;
}

function calculateAccessableRollsOfPaper(diagram) {
  let totalRolls = 0;
  let count = 0;

  for (let row = 0; row < diagram.length; ++row) {
    for (let column = 0; column < diagram[row].length; ++column) {
      if (diagram[row][column] === "@") {
        totalRolls += checkAdjecentPositions(diagram, row, column);
      }
    }
  }
  console.log(count);
  return totalRolls;
}

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();

  const diagram = input.split("\n");
  const totalAccessableRolls = calculateAccessableRollsOfPaper(diagram);
  console.log(
    `Number of rolls of paper that can be accessed by a forklift: ${totalAccessableRolls}`,
  );
} catch (error) {
  console.error(error);
}
