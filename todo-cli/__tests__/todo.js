/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

describe("Todo List test suit", () => {
  test("Should add new todo", () => {
    expect(all.length).toBe(0);

    add({
      title: "Book ",
      dueDate: new Date().toISOString().slice(0, 10),
      completed: false,
    });
    expect(all.length).toBe(1);
  });

  test("Todo should be marked as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
