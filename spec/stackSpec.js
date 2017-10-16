const Stack = require("./src/stack");

describe("popping an object from the stack", () => {
  describe("when there is no object on the stack", () => {
    it("throws an error", () => {
      const stack = new Stack();

      expect(() => stack.pop() ).toThrow(new Error("Stack empty"));
    });
  });

  describe("when there is an object on the stack", () => {
    let stack;
    let object;

    beforeEach( () => {
      object = new Object();
      stack = new Stack();

      stack.push(object);
    });

    it("pops the pushed object", () => {
      expect(stack.pop()).toEqual(object);
    });

    it("removes the last object from the stack", () => {
      stack.pop();

      expect( () => stack.pop() ).toThrow(new Error("Stack empty"));
    });
  });
});