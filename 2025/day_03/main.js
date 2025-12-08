import fs from "node:fs";

function getLargestJoltage(bank) {
  let largestJoltage = 0;

  const sortedBankDesc = [...bank]
    .map((battery, idx) => ({ idx, battery: Number(battery) }))
    .sort((a, b) => b.battery - a.battery);

  if (sortedBankDesc[0].idx < sortedBankDesc[1].idx) {
    largestJoltage += sortedBankDesc[0].battery + sortedBankDesc[1].battery;
  } else {
    const largerIndex = sortedBankDesc.findIndex(
      (bank) => bank.idx > sortedBankDesc[0].idx,
    );

    largestJoltage +=
      largerIndex < 0
        ? sortedBankDesc[1].battery + sortedBankDesc[0].battery
        : sortedBankDesc[0].battery + sortedBankDesc[largerIndex].battery;
  }

  return largestJoltage;
}

function getTotalOutputJoltage(banks) {
  let sum = 0;

  banks.forEach((bank) => {
    sum += getLargestJoltage(bank);
  });

  return sum;
}

try {
  const input = fs
    .readFileSync("./input2.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();

  const banks = input.split("\n");
  const sum = getTotalOutputJoltage(banks);
  console.log(`Total output joltage is ${sum}.`);
} catch (error) {
  console.error(error);
}
