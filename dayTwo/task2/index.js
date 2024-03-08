const submitButton = document.getElementById("button");

submitButton.addEventListener("click", submit);

function submit() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (
    firstName.value === "" ||
    lastName === "" ||
    email === "" ||
    password === ""
  ) {
    alert("Please enter all fields are required");
  } else {
    alert("Good job hoomie " + firstName.value);
  }
}

const person = {
  name: "Sam",
  age: 30,
  great: function () {
    console.log("hello");
  },
};
