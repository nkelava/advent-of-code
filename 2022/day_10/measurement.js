class Measurement {
    constructor(start, end, step) {
        this.start = start;
        this.end = end;
        this.step = step;
        this.sum = 0;
    }

    increaseSum(quantity) {
        this.sum += quantity;
    }
}

module.exports = Measurement;
