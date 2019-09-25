
class Stack {
    constructor() {
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    pop() {
        return this.storage.pop();
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    printContents() {
        this.storage.forEach(elem => console.log(elem));
    }
}

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

console.log(s.storage)

// const sortedStack = sortStack(s); // sortedStack is also a Stack instance

// sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10