/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

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

  test("over due task correctly retrieved", () => {
    add({
      title: "overdue task ",
      dueDate: "2025-05-08",
      completed: false,
    });

    const overdueTasks = overdue();
    expect(overdueTasks.length).toBe(1);
    expect(all[1].dueDate).not.toBe(new Date().toISOString().slice(0, 10));
  });

  test("no-due task correctly retrieved", () => {
    add({
      title: "today task ",
      dueDate: "2025-05-09",
      completed: false,
    });

    const todayTasks = dueToday();
    expect(todayTasks.length).toBe(2);
    expect(all[2].dueDate).toBe(new Date().toISOString().slice(0, 10));
  });

  test("due later task correctly retrieved", () => {
    add({
      title: "due later task ",
      dueDate: "2025-05-10",
      completed: false,
    });

    const laterTasks = dueLater();
    expect(laterTasks.length).toBe(1);
    expect(all[3].dueDate).not.toBe(new Date().toISOString().slice(0, 10));
  });
});
