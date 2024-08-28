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
