import fs from "node:fs";

function getLargestJoltage(batteryBank, batteriesToSelect) {
  const bankLength = batteryBank.length;
  const result = [];
  let toRemove = bankLength - batteriesToSelect;

  for (let i = 0; i < bankLength; i++) {
    const currentDigit = batteryBank[i];

    while (
      result.length > 0 &&
      result[result.length - 1] < currentDigit &&
      toRemove > 0
    ) {
      result.pop();
      toRemove--;
    }

    result.push(currentDigit);
  }

  return Number(result.slice(0, batteriesToSelect).join(""));
}

function getTotalOutputJoltage(batteryBanks, batteriesToSelect) {
  let totalJoltage = 0;

  batteryBanks.forEach((bank) => {
    const bankJoltage = getLargestJoltage(bank, batteriesToSelect);
    totalJoltage += bankJoltage;
  });

  return totalJoltage;
}

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();

  const batteryBanks = input.split("\n");

  const totalWith2Batteries = getTotalOutputJoltage(batteryBanks, 2);
  console.log(`Total output joltage: ${totalWith2Batteries}`);

  const totalWith12Batteries = getTotalOutputJoltage(batteryBanks, 12);
  console.log(`Total output joltage: ${totalWith12Batteries}`);
} catch (error) {
  console.error(error);
}
