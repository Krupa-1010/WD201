const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const today = new Date();
  let currentDate = today.toISOString().split("T")[0];
  const overdue = () => {
    const overdueTodos = all.filter((todo) => todo.dueDate < currentDate);
    return overdueTodos;
  };

  const dueToday = () => {
    const todayTodos = all.filter((todo) => todo.dueDate === currentDate);
    return todayTodos;
  };

  const dueLater = () => {
    const laterTodos = all.filter((todo) => todo.dueDate > currentDate);
    return laterTodos;
  };

  const toDisplayableList = (list) => {
    const displayString = list
      .map((item) => {
        if (item.dueDate === currentDate) {
          if (item.completed === true) {
            return `[x] ${item.title}\n`;
          } else {
            return `[ ] ${item.title}`;
          }
        } else if (item.completed === true) {
          return `[x] ${item.title} ${item.dueDate}`;
        } else {
          if (item.dueDate < currentDate) {
            return `[ ] ${item.title} ${item.dueDate}`;
          } else {
            return `[ ] ${item.title} ${item.dueDate}\n`;
          }
        }
      })
      .join("");

    return displayString;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
