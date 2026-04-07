import fs from "node:fs";

function parseRanges(rangeList) {
  console.log(rangeList);
  return rangeList.map((range) => {
    const [start, end] = range.split("-");
    return [Number(start), Number(end)];
  });
}

function checkOverlap(firstRange, secondRange) {
  return (
    Math.max(firstRange[0], secondRange[0]) <=
    Math.min(firstRange[1], secondRange[1])
  );
}

function mergeRanges(expirationRangeList) {
  const parsedRanges = parseRanges(expirationRangeList).sort(
    (a, b) => a[0] - b[0],
  );
  const endIndex = expirationRangeList.length - 1;

  for (let i = 0; i < endIndex; ++i) {
    const isOverlaping = checkOverlap(parsedRanges[i], parsedRanges[i + 1]);
    console.log(
      "Ranges ",
      parsedRanges[i],
      " and ",
      parsedRanges[i + 1],
      `${isOverlaping ? "overlaps." : "doesn't overlap."}`,
    );
  }
}

function validateIngredient(range, ingredientID) {
  return ingredientID >= range[0] && ingredientID <= range[1];
}

function getFreshIngredientCount(rangeList, ingredients) {
  const parsedRanges = parseRanges(rangeList);
  let freshIngredientsCount = 0;

  for (const ingredient of ingredients) {
    const ingredientID = BigInt(ingredient);
    for (let range of parsedRanges) {
      if (validateIngredient(range, ingredientID)) {
        freshIngredientsCount++;
        break;
      }
    }
  }

  return freshIngredientsCount;
}

try {
  const input = fs
    .readFileSync("./input2.txt", "utf-8")
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

  const expirationRangeList = input[0].split("\n");
  // const ingredientIDs = input[1].split("\n");

  // const freshIgredientCount = getFreshIngredientCount(
  //   expirationRangeList,
  //   ingredientIDs,
  // );
  //
  const mergedRanges = mergeRanges(expirationRangeList);

  // console.log(`There are ${freshIgredientCount} fresh ingredient IDs.`);
} catch (error) {
  console.error(error);
}
