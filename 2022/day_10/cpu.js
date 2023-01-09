const Instruction = require("./instruction");
const Command = require("./command");
const Measurement = require("./measurement");

class CPU {
    constructor() {
        this.program = [];
        this.programActive = false;
        this.commands = [
            new Command("noop", 1),
            new Command("addx", 2)
        ];
        this.currentInstructionId = 0;
        this.wait = 0;
        this.register = 1;
        this.measurement = new Measurement(20, 220, 40);
    }
    
    add(instruction) {
        this.program.push(instruction);
    }

    parse(instructions) {
        instructions.forEach(instruction => {
            const [commandName, argumentValue] = instruction.split(" ");
            const command = this.commands.find(command => command.name === commandName);
            const argument = (argumentValue) ? Number(argumentValue) : 0;
            const newInstruction = new Instruction(new Command(command.name, command.cycleDuration), argument);
            this.add(newInstruction);
        });
    }

    insertProgram(instructions) {
        this.parse(instructions);
        this.programActive = true;
    }

    runCycle(cycle) {
        if(this.currentInstructionId === this.program.length) {
            this.programActive = false;
            return;
        }

        let currentInstruction = this.program[this.currentInstructionId];
        
        currentInstruction.command.cycleDuration--;

        if(cycle % this.measurement.step === this.measurement.start) {
            this.measurement.increaseSum(cycle * this.register);
        }
        
        if(currentInstruction.command.cycleDuration === 0) {
            this.register += currentInstruction.argument;
            this.currentInstructionId++;
        }
    }
}

module.exports = CPU;
