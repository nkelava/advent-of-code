class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        if(this.isEmpty()) {
            this.queue.push(element);
        } else {
            for(let i = 0; i < this.queue.length; i++) {
                if(element.fScore <= this.queue[i].fScore) {
                    this.queue.splice(i, 0, element);
                    return;           
                }
            }
            
            this.queue.push(element);
        }
    }

    dequeue() {
        return this.queue.shift();  
    }

    front() {
        return this.queue[0];
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

    find(obj) {
        let found = false;

        this.queue.forEach(item => {
            if(item.row === obj.row && item.column === obj.column) {
                found = true;
            }
        });
        
        return found;
    }
}

module.exports = PriorityQueue;
