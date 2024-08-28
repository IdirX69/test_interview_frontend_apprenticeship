// Task 1
const getEvenNumbers = (array) => {
  let evenNumbers = [];

  array.forEach((number) => {
    if (number % 2 === 0) evenNumbers.push(number);
  });

  return evenNumbers;
};

//   Task 2
let text = "Check";

document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("myText").textContent = "Hello," + text + "!";
});

// Task 3

const fetchTodosList = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=5"
  );
  if (response.ok) return response.json();
  throw new Error("something was wrong");
};

fetchTodosList().then((data) => {
  const todoList = document.getElementById("todo-list");
  data.map((todo) => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;
    todoList.appendChild(listItem);
  });
});
