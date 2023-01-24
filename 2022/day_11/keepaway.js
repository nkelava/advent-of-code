const Monkey = require("./monkey");
const Operation = require("./operation");
const Test = require("./test");
const { compareDesc } = require("./utils");

class KeepAway {
    constructor(notes, rounds, isRelieved) {
        this.monkeys = this.parseNotes(notes, 0, []);
        this.rounds = rounds;
        this.isRelieved = isRelieved;
        this.lowestCommonMultiple = this.getLowestCommonMultiple();
    }

    parseNotes(notes, monkeyStartIndex, monkeys) {
        if(monkeyStartIndex >= notes.length) return monkeys;

        // Monkey 0:
        //  Starting items: 89, 73, 66, 57, 64, 80
        //  Operation: new = old * 3
        //  Test: divisible by 13
        //   If true: throw to monkey 6
        //   If false: throw to monkey 2
    
        const monkeyAttributes = notes.slice(monkeyStartIndex, monkeyStartIndex + 6);
        const monkeyId = Number(monkeyAttributes[0].slice(7, monkeyAttributes[0].length - 1));
        const items = monkeyAttributes[1].split(": ")[1].split(",").map(item => Number(item.trim()));
        const operation = new Operation(monkeyAttributes[2].split(": ")[1]);
        const testDescription = monkeyAttributes[3].split(": ")[1];
        const ifTrue = monkeyAttributes[4].split(": ")[1];
        const ifFalse = monkeyAttributes[5].split(": ")[1];
        const test = new Test(testDescription, ifTrue, ifFalse);

        const monkey = new Monkey(monkeyId, items, operation, test);
        monkeys.push(monkey);
    
        return this.parseNotes(notes, monkeyStartIndex + 7, monkeys);
    }

    play() {
        for(let i = 0; i < this.rounds; i++) {
            this.monkeys.forEach(monkey => {
                monkey.inspect(this.monkeys, this.isRelieved, this.lowestCommonMultiple);
            });
        }
    }

    calculateMonkeyBusiness() {
        this.monkeys.sort(compareDesc);

        return this.monkeys[0].inspectCounter * this.monkeys[1].inspectCounter;
    }
    
    getLowestCommonMultiple() {
        return this.monkeys.reduce((multiple, monkey) => {
            multiple * monkey.test.value;
        }, 1);
    }
}

module.exports = KeepAway;
