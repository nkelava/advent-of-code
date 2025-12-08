import fs from "node:fs";

function getLargestJoltage(batteryBank) {
  let maxJoltage = 0;

  const batteriesByValue = [...batteryBank]
    .map((digit, position) => ({
      position,
      value: Number(digit),
    }))
    .sort((a, b) => b.value - a.value);

  const highest = batteriesByValue[0];
  const secondHighest = batteriesByValue[1];

  if (highest.position < secondHighest.position) {
    maxJoltage = highest.value * 10 + secondHighest.value;
  } else {
    const firstBatteryAfterHighest = batteriesByValue.findIndex(
      (battery) => battery.position > highest.position,
    );

    maxJoltage =
      firstBatteryAfterHighest < 0
        ? secondHighest.value * 10 + highest.value
        : highest.value * 10 + batteriesByValue[firstBatteryAfterHighest].value;
  }

  return maxJoltage;
}

function getTotalOutputJoltage(batteryBanks) {
  let totalJoltage = 0;

  batteryBanks.forEach((bank) => {
    totalJoltage += getLargestJoltage(bank);
  });

  return totalJoltage;
}

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim();

  const batteryBanks = input.split("\n");
  const total = getTotalOutputJoltage(batteryBanks);
  console.log(`Total output joltage is ${total}.`);
} catch (error) {
  console.error(error);
}
