const fs = require("fs");

function rearrangeStacks(stacks, instructions, model) {
    const rearrangedStacks = stacks.map(stack => stack.slice());
    
    instructions.forEach(instruction => {
        const [quantity, from, to] = instruction;
        const cratesToMove = rearrangedStacks[from-1].slice(0, quantity);

        if(model === 9000) cratesToMove.reverse();

        rearrangedStacks[to-1].unshift(...cratesToMove); // Add crates on top of targeted stack
        rearrangedStacks[from-1] = rearrangedStacks[from-1].slice(quantity); // Remove crates from previous stack
    });

    return rearrangedStacks;
}

function parseStacks(stacks) {
    const stackCount = (stacks[0].length + 1) / 4;
    const stacksParsed = Array.from(Array(stackCount), () => new Array());

    stacks.forEach(stack => {
        for(let i = 0; i < stack.length; ++i) {
            if(/^[A-Za-z]$/.test(stack[i])) {
                stacksParsed[Math.floor(i/4)].push(stack[i]);
            }
        }
    })

    return stacksParsed;
}

function parseInstructions(instructions) {
    const re = /\d+/g;

    return instructions.reduce((instructionsParsed, instruction) => {
        if(instruction.length > 0) {
            instructionsParsed.push(instruction.match(re).map(el => el = Number(el)));
        };

        return instructionsParsed;
    }, []);
}

function printTop(stacks) {
    stacks.forEach(stack => console.log(stack[0]));
}

try {
    const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n\n");
    const [stacks, instructions] = input;
    const stacksParsed = parseStacks(stacks.split("\n"));
    const instructionsParsed = parseInstructions(instructions.split("\n"));

    const stacksPart1 = rearrangeStacks(stacksParsed, instructionsParsed, 9000);
    const stacksPart2 = rearrangeStacks(stacksParsed, instructionsParsed, 9001);

    printTop(stacksPart1);
    console.log("----");
    printTop(stacksPart2);
} catch (err) {
    console.error(err);
}