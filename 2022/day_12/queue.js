class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        this.queue.shift();
    }

    front() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return (this.queue.length < 1);
    }

    find(obj) {
        for(let i = 0; i < this.queue.length; i++) {
            if(this.queue[i].row === obj.row && this.queue[i].column === obj.column) {
                return true;
            }
        }
        return false;
    }
}

module.exports = Queue;
