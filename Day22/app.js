const headingElement = document.getElementsByClassName("heading");
const para = document.getElementById("paragraph");
const inputbox = document.querySelector("#inputbox");
const button = document.querySelector("button");
console.log("✌️inputbox --->", inputbox);
console.log("✌️para --->", para.innerText);

button.addEventListener("click", () => {
  if (inputbox.value.length > 0) {
    console.log(inputbox.value);
  }
  console.log("Button is clicked");
});

// for (let i = 0; i < headingElement.length; i++) {
//   console.log(headingElement[i].innerText);
// }
