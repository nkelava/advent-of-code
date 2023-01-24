class Monkey {
    constructor(id, items, operation, test) {
        this.id = id;
        this.items = [...items];
        this.inspectCounter = 0;
        this.operation = operation;
        this.test = test;
    }

    addItem(item) {
        this.items.push(item);
    }

    inspect(monkeys, isRelieved, lowestCommonMultiple) {
        this.items.forEach(item => {
            item = this.operation.run(item);
            item = (isRelieved) ? Math.floor(item / 3) : Math.floor(item % lowestCommonMultiple);
            this.test.run(item);
            this.inspectCounter++;
            monkeys[this.test.throwTo].addItem(item);
        });

        this.items = [];
    }
}

module.exports = Monkey;
