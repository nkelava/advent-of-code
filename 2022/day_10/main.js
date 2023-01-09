const fs = require("fs");
const Device = require("./device");

try {
    const cpuInstructions = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n");
    const crt = {
        screen: {
            height: 6,
            width: 40
        }
    };
    
    const device = new Device(crt.screen.height, crt.screen.width);
    device.run(cpuInstructions);

    console.log(`Sum of the first six signal strenghts is ${device.cpu.measurement.sum}.`);
    device.crt.display();
} catch (error) {
    console.log(error);
}
