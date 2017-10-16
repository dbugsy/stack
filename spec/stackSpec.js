const Stack = require("./src/stack");

describe("popping an object from the stack", () => {
  describe("when there is no object on the stack", () => {
    it("throws an error", () => {
      const stack = new Stack();

      expect(() => stack.pop() ).toThrow(new Error("Stack empty"));
    });
  });
});