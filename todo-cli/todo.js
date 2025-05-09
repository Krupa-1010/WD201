const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }
  const today = new Date();
  let currentDate=today.toISOString().split('T')[0];
  const overdue = () => {
    
    const overdueTodos=all.filter((todo)=> todo.dueDate < currentDate);
    return overdueTodos;
  }

  const dueToday = () => {
    const todayTodos=all.filter((todo)=> todo.dueDate === currentDate);
    return todayTodos;
  }

  const dueLater = () => {
    const laterTodos=all.filter((todo)=> todo.dueDate > currentDate);
    return laterTodos;
    
  }

  const toDisplayableList = (list) => {
   
    const displayString=list.map((item)=>{
        if(item.dueDate===currentDate)
        {
            if(item.completed===true)
            {
              return `[x] ${item.title}\n`;
            }
            else
            {
               return `[ ] ${item.title}\n`; 
            }
           

        }
        else if(item.completed===true)
        {
           return `[x] ${item.title} ${item.dueDate}\n`;
        }
        else{
            return `[ ] ${item.title} ${item.dueDate}\n`;
        }
    }).join("");
    
    return displayString;
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")