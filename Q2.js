class Queue {
    constructor() {
        this.items=[];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return "queue is empty";
        }
        return this.items.shift();
    }

    front() {
        return this.isEmpty() ? "queue is empty" : this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        this.items.forEach((stack, index) =>{
            console.log(`Stack ${index+1}:`);
            stack.printStack();
        })
    }
}

class Stack {
    constructor() {
        this.items=[];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.isEmpty()) {
            return "stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? "stack is empty" : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }

    printStack() {
        console.log(this.items.join(" "));
    }
}

let stack1= new Stack();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(50);

let stack2= new Stack();
stack2.push(70);
stack2.push(80);
stack2.push(90);
stack2.push(100);

const queue =new Queue();
queue.enqueue(stack1);
queue.enqueue(stack2);

queue.printQueue();