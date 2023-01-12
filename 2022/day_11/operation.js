class Operation {
    constructor(description) {
        this.description = description;
        this.operator = this.getOperator();
        this.value = this.getValue();
    }

    // Operation: new = old * 3
    getOperator() {
        const re = new RegExp("[\+|\-|\*|\/]");
        return this.description.match(re).at(0);
    }

    getValue() {
        return Number(this.description.slice(this.description.lastIndexOf(" ")).trimStart());
    }

    run(item) {
        if(isNaN(this.value)) this.value = item;

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
                return null;
        }
    }
}

module.exports = Operation;
