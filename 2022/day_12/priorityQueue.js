class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        if(this.isEmpty()) {
            this.queue.push(element);
        } else {
            let added = false;

            for(let i = 0; i < this.queue.length; i++) {
                if(element.fScore <= this.queue[i].fScore) {
                    this.queue.splice(i, 0, element);
                    added = true;
                    break;           
                }
            }

            if(!added) {
                this.queue.push(element);
            }
        }
    }

    dequeue() {
        this.queue.shift();  
    }

    front() {
        return this.queue[0];
    }

    find(obj) {
        let found = false;

        this.queue.forEach(item => {
            if(item.row === obj.row && item.column === obj.column && item.parent === obj.parent) {
                found = true;
            }
        });
        
        return found;
    }

    peek() {
        console.log(this.queue[0]);
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return (this.queue.length < 1);
    }
}

module.exports = PriorityQueue;
