class Operation {
    // Operation: new = old * 3
    constructor(description) {
        this.description = description;
        this.operator = this.parseOperator();
        this.value = this.parseValue();
    }

    parseOperator() {
        const re = new RegExp("[\+|\-|\*|\/]");
        const operator = this.description.match(re);

        if(!operator) throw new Error(`Something went wrong while parsing the operator in operation: ${this.description}`);

        return operator[0];
    }

    parseValue() {
        return Number(this.description.slice(this.description.lastIndexOf(" ")).trim());
    }

    run(item) {
        if(isNaN(this.value)) {
            return item * item;
        }

        switch(this.operator) {
            case "+":
                return item + this.value;
            case "-":
                return item - this.value;
            case "*":
                return item * this.value;
            case "/":
                return item / this.value;
            default:
                throw new Error("Something went wrong with operation execution.");
        }
    }
}

module.exports = Operation;
