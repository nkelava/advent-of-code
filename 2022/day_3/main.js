const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function findIntersectionItemOtherOptions(rucksack, option){
    const half = rucksack.length / 2;
    const firstCompartment = [...rucksack.slice(0, half)];
    const secondCompartment = [...rucksack.slice(half)];
    
    if (option === 1) {
        const intersectionItems = firstCompartment.filter(item => secondCompartment.includes(item));
        return intersectionItems[0];
    }

    const intersectionItems = new Set(firstCompartment.filter(item => secondCompartment.includes(item)));
    return intersectionItems.values().next().value;
}

function findIntersectionItem(rucksack) {
    const half = rucksack.length / 2;
    const secondCompartment = rucksack.slice(half);

    for (let item = 0; item < half; ++item) {
        if (secondCompartment.includes(rucksack[item])) {
            return rucksack[item];
        };
    }
    return;
}

function calculatePrioritySum(rucksacks) {
    let sum = 0;

    rucksacks.forEach(rucksack => {
        const intersectionItem = findIntersectionItem(rucksack);
        // const intersectionItem = findIntersectionItemOtherOptions(rucksack, 1);
        
        sum += alphabet.indexOf(intersectionItem) + 1;
    });

    return sum;
}

function findGroupBadgeItem(rucksacks) {
    for (let item = 0; item < rucksacks[0].length; ++item) {
        if (rucksacks[1].includes(rucksacks[0][item]) && rucksacks[2].includes(rucksacks[0][item])) {
            return rucksacks[0][item];
        };
    }
    return;
}

function calculatePrioritySumPerGroup(rucksack) {
    let sum = 0;

    for(let i = 0; i < rucksack.length - 2; i += 3) {
        const intersectionItem = findGroupBadgeItem([...rucksack.slice(i, i + 3)]); 
        
        sum += alphabet.indexOf(intersectionItem) + 1;
    }

    return sum;
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").trim().split("\n");
    const prioritySum = calculatePrioritySum(input);
    const prioritySumPerGroup = calculatePrioritySumPerGroup(input);

    console.log(`Total priority sum per individual: ${prioritySum}`);
    console.log(`Total priority sum per group: ${prioritySumPerGroup}`);
} catch (err) {
    console.error(err);
}
