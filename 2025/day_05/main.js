import fs from "node:fs";

function validateIngredient(range, ingredientID) {
  const [start, end] = range.split("-");
  return (
    BigInt(ingredientID) >= BigInt(start) && BigInt(ingredientID) <= BigInt(end)
  );
}
function getFreshIngredientCount(rangeList, ingredients) {
  let freshIngredientsCount = 0;

  for (const ingredient of ingredients) {
    for (let range of rangeList) {
      if (validateIngredient(range, ingredient)) {
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
