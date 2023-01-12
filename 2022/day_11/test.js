class Test {
    constructor(description, ifTrue, ifFalse) {
        this.description = description;
        this.operator = null;
        this.value = null;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }

    parseDescription(description) {
        // Test: divisible by 13
        //   If true: throw to monkey 6
        //   If false: throw to monkey 2
    }
}

module.exports = Test;
