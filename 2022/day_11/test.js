class Test {
    // Test: divisible by 13
    //   If true: throw to monkey 6
    //   If false: throw to monkey 2
    constructor(description, ifTrue, ifFalse) {
        this.description = description;
        this.operator = "/";
        this.value = this.parseValue();
        this.ifTrueDescription = ifTrue;
        this.ifFalseDescription = ifFalse;
        this.ifTrueValue = this.parseIfTrueValue();
        this.ifFalseValue = this.parseIfFalseValue();
        this.throwTo = null;
    }

    parseValue() {
        return Number(this.description.slice(this.description.lastIndexOf(" ") + 1).trim());
    }

    parseIfTrueValue() {
        return Number(this.ifTrueDescription.slice(this.ifTrueDescription.lastIndexOf(" ") + 1).trim());
    }

    parseIfFalseValue() {
        return Number(this.ifFalseDescription.slice(this.ifFalseDescription.lastIndexOf(" ") + 1).trim());
    }

    run(item) {
        switch(this.operator) {
            case "/":
                this.throwTo = (item % this.value === 0) ? this.ifTrueValue : this.ifFalseValue;
                break;
            default:
                throw new Error("Something went wrong with test execution.");
        }
    }
}

module.exports = Test;
