import fs from "node:fs";

function getLargestJoltage(batteryBank, batteriesToSelect) {
  const bankLength = batteryBank.length;
  const memo = Array(bankLength + 1)
    .fill(null)
    .map(() => Array(batteriesToSelect + 1).fill(null));

  for (let position = 0; position <= bankLength; position++) {
    memo[position][0] = "";
  }

  for (let position = bankLength - 1; position >= 0; position--) {
    for (let remaining = 1; remaining <= batteriesToSelect; remaining++) {
      if (memo[position + 1][remaining] !== null) {
        memo[position][remaining] = memo[position + 1][remaining];
      }

      if (memo[position + 1][remaining - 1] !== null) {
        const withCurrentBattery =
          batteryBank[position] + memo[position + 1][remaining - 1];

        if (memo[position][remaining] === null) {
          memo[position][remaining] = withCurrentBattery;
        } else {
          if (withCurrentBattery > memo[position][remaining]) {
            memo[position][remaining] = withCurrentBattery;
          }
        }
      }
    }
  }

  return memo[0][batteriesToSelect] ? Number(memo[0][batteriesToSelect]) : 0;
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
