/*
  DATA FORMAT:
    - [[{} || int], int] ∈ P

  RULES:
    1.  If both value are int lower value should come first:
          - if left value is lower the inputs are in right order
          - if right value is lower the inputs are not in right order
          - otherwise they are equal what continue checking

    2.  If both values are lists:
          - compare values using rule 1
          - if left list runs out of items first the inputs are in the right order
          - if right list runs out of itmes first the inputs are not in the right order
          - if lists are the same length and no comparison makes a decision about the order continue checking

    3.  If exactly one value is an integer convert the integer to a list:
          - compare values using rule 2

*/

function compare(left, right) {
  console.log(
    `Comparing packets...\nPacket 1 (${typeof left}): ${left}\nPacket 2 (${typeof right}): ${right}`
  );

  if (right.length < left.length) {
    console.log("Right order: false\n");
    return false;
  }

  for (let i = 0; i < left.length; i++) {
    if (Array.isArray(left[i])) {
      continue;
    }

    if (left[i] > right[i]) {
      console.log("Right order: false\n");
      return false;
    }
  }
  console.log("Right order: true\n");
  return true;
}

module.exports = {
  compare,
};
