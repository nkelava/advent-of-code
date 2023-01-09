const CPU = require("./cpu");
const CRT = require("./crt");

class Device {
    constructor(crtHeight, crtWidth) {
        this.cpu = new CPU();
        this.crt = new CRT(crtHeight, crtWidth);
        this.cycle = 1;
    }

    run(instructions) {
        this.cpu.insertProgram(instructions);

        while(this.cpu.programActive) {
            this.crt.drawPixel(this.cpu.register);
            this.cpu.runCycle(this.cycle);
            this.cycle++;
        }
    }
}

module.exports = Device;
