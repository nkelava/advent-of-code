const fs = require("fs");
const packetHandler = require("./packetHandler");

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

  packetPairs.forEach((packetPair) => {
    const left = JSON.parse(packetPair[0]);
    const right = JSON.parse(packetPair[1]);

    packetHandler.compare(left, right);
  });
} catch (error) {
  console.error(error);
}
