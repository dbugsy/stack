class Stack {
  constructor() {
    this.elements = [];
  }
  pop() {
    if(this.elements < 1) {
      throw new Error("Stack empty");
    }
    return this.elements.pop();
  }

  push(object) {
    this.elements.push(object);
  }
}

module.exports = Stack;