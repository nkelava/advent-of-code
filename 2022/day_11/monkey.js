class Monkey {
    constructor(id, items, operation, test) {
        this.id = id;
        this.items = [...items];
        this.itemsInspected = 0;
        this.operation = operation;
        this.test = test;
    }

    inspect() {
        this.items.forEach(item => {

        });
    }
}

module.exports = Monkey;
