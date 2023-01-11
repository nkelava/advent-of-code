class Monkey {
    constructor(id, items, operation, test) {
        this.id = id;
        this.items = [...items];
        this.operation = operation;
        this.test = test;
    }
}

module.exports = Monkey;
