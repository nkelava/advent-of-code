import fs from "node:fs";

const mod = (value, modulus) => ((value % modulus) + modulus) % modulus;

const getPasswords = (rotations) => {
  const modulus = 100;
  let dialPosition = 50;
  let stopsAtZero = 0;
  let totalZeroHits = 0;

  for (const rotation of rotations) {
    const unwrappedPosition = dialPosition + rotation;
    totalZeroHits += Math.abs(Math.trunc(unwrappedPosition / 100));

    if (dialPosition !== 0 && unwrappedPosition <= 0) totalZeroHits++;

    dialPosition = mod(dialPosition + rotation, modulus);
    if (dialPosition === 0) stopsAtZero++;
  }

  return { password: stopsAtZero, newPassword: totalZeroHits };
};

try {
  const input = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

  const rotations = input.flatMap((block) =>
    block.split("\n").map((line) => {
      const direction = line[0];
      const distance = Number(line.slice(1));
      return direction === "R" ? distance : -distance;
    }),
  );

  const { password, newPassword } = getPasswords(rotations);

  console.log(`Password is ${password}.`);
  console.log(`New password is ${newPassword}.`);
} catch (error) {
  console.error(error);
}
