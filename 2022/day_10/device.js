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
            this.cpu.runCycle(this.cycle);
            // this.crt.drawPixel();
            this.cycle++;
        }
    }
}

module.exports = Device;
