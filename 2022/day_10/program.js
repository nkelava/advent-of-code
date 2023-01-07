const Instruction = require("./instruction");
const Command = require("./command");
const Measurement = require("./measurement");

class Program {
    constructor() {
        this.instructions = [];
        this.commands = [
            new Command("noop", 1),
            new Command("addx", 2)
        ],
        this.cycle = 1;
        this.register = 1;
        this.measurement = new Measurement(20, 220, 40);
    }
    
    add(instruction) {
        this.instructions.push(instruction);
    }

    parse(instructions) {
        instructions.forEach(instruction => {
            const [commandName, argumentValue] = instruction.split(" ");
            const command = this.commands.find(command => command.name === commandName);
            const argument = (argumentValue) ? Number(argumentValue) : 0;
            const newInstruction = new Instruction(command, argument);
            this.add(newInstruction);
        });
    }

    run(instructions) {
        this.parse(instructions);

        this.instructions.forEach(instruction => {
            this.runCycles(instruction.command.cycleDuration);
            if(this.cycle > this.measurement.end) return;
            this.register += instruction.argument;
        });
    }

    runCycles(duration) {
        for(let i = 0; i < duration; ++i) {
            if(this.cycle % this.measurement.step === this.measurement.start) {
                this.measurement.increaseSum(this.cycle * this.register);
            }
            ++this.cycle;
        }
    }
}

module.exports = Program;
