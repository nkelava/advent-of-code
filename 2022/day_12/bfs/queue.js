class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
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
        let isFound = false;
        
        this.queue.forEach(item => {
            if(item.row === obj.row && item.column === obj.column) {
                isFound = true;
            }
        })

        return isFound;
    }
}

module.exports = Queue;
