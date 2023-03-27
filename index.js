const input = document.querySelector(".input");
const button = document.querySelector(".request");
const error = document.querySelector(".error");

let mailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function testmail(input, error) {
  if (input.value.match(mailRegex)) {
    error.classList.remove("visible");
    input.style.border = "solid";
    input.style.color = "green";
    console.log("true");
  } else {
    error.classList.add("visible");
    console.log("false");
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  testmail(input, error);
  console.log("click");
});
