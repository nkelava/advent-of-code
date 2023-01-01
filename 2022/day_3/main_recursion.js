const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function findIntersectionItem(rucksacks, index, intersectionItems) {
    let currentIntersectionItems = (index < 1)
    ? [...rucksacks[index]].filter(item => rucksacks[index + 1].includes(item))
    : [...rucksacks[index]].filter(item => rucksacks[index + 1].includes(item) && intersectionItems.includes(item));
 
    currentIntersectionItems = currentIntersectionItems.filter((item, index) => currentIntersectionItems.indexOf(item) === index); // Remove duplicates

    return (index + 2 === rucksacks.length) ? currentIntersectionItems : findIntersectionItem(rucksacks, ++index, currentIntersectionItems);
}

function calculatePrioritySum(rucksacks, index, sum) {
    const intersectionItem = findIntersectionItem(rucksacks[index], 0, []);
    sum += alphabet.indexOf(intersectionItem) + 1;

    return (index < rucksacks.length - 1) ? calculatePrioritySum(rucksacks, ++index, sum) : sum;
}

function modifyRucksacks(rucksacks, index) {
    if (index === rucksacks.length) return;

    const half = rucksacks[index].length / 2;
    const firstCompartment = rucksacks[index].slice(0, half);
    const secondCompartment = rucksacks[index].slice(half);

    rucksacks[index] = [firstCompartment, secondCompartment];
    modifyRucksacks(rucksacks, ++index);
}

function calculatePrioritySumPerRucksack(rucksacks) {
    const rucksacksCopy = [...rucksacks];
    modifyRucksacks(rucksacksCopy, 0)
    const sum = calculatePrioritySum(rucksacksCopy, 0, 0);
    
    return sum;
}

function calculatePrioritySumPerGroup(rucksacks) {
    const groupCount = 3;
    const rucksacksCopy = [...rucksacks].reduce((rucksacks, rucksack, index) => {
        return ((index % groupCount) ? rucksacks[rucksacks.length - 1].push(rucksack) : rucksacks.push([rucksack])) && rucksacks;
    }, []); // Group rucksacks in a group of 3
    const sum = calculatePrioritySum(rucksacksCopy, 0, 0);

    return sum;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").trim().split("\n");
    const prioritySumPerRucksack = calculatePrioritySumPerRucksack(input);
    const prioritySumPerGroup = calculatePrioritySumPerGroup(input);
    
    console.log(`Total priority sum per individual: ${prioritySumPerRucksack}`);
    console.log(`Total priority sum per group: ${prioritySumPerGroup}`);
} catch (err) {
    console.error(err);
}