import fs from "node:fs";

function parseRanges(rangeList) {
  return rangeList.map((range) => {
    const [start, end] = range.split("-");
    return [BigInt(start), BigInt(end)];
  });
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
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

  const expirationRangeList = input[0].split("\n");
  const ingredientIDs = input[1].split("\n");

  const freshIgredientCount = getFreshIngredientCount(
    expirationRangeList,
    ingredientIDs,
  );

  console.log(`There are ${freshIgredientCount} fresh ingredient IDs.`);
} catch (error) {
  console.error(error);
}
