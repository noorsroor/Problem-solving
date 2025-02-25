
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
    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }

    reverse() {
        let revArr=new Stack();
        let x=0;
        let n=this.items.length;
        for(let i=0; i<n; i++) {
            x=this.items.pop();
            revArr.push(x);
        }
        return revArr;
    }

    printStack() {
        console.log(this.items.join(" "));
    }
}




let arr= new Stack();
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(50);
console.log("array before reverse: ");
arr.printStack();
console.log("array after reverse: ");

arr.reverse().printStack();
