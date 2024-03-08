
// const inputForm = document.getElementById("form");
console.log(`${firstName} this is my gee`)

form.addEventListener('submit', () => {

  console.log(`${firstName.value} ${lastName.value} ${email.value} are your details`)
  
  if(firstName.value === "" || lastName.value === "" || email.value === ""){
    alert("Please fill in all fieds")
  }else{
    alert("Weldone dumb head")
  }
})