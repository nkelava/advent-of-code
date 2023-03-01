const fs = require("fs");

function parsePackets(input) {
  const step = 2;
  let packetPairs = [];

  for (let i = 0; i < input.length; i += 3) {
    const slice = input.slice(i, i + step);
    packetPairs.push(slice);
  }

  return packetPairs;
}

try {
  const packets = fs
    .readFileSync("./test.txt", "utf-8")
    .replace(/\r/g, "")
    .split("\n")
    .splice("");

  const packetPairs = parsePackets(packets);

  console.log(packetPairs);
} catch (error) {
  console.error(error);
}
