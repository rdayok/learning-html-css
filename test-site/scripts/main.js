const myPageHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

// document.querySelector("html").addEventListener('click', function(){
//   alert("Ouch! Stop poking me!")
//   myPageHeading.textContent = "HELLO DARDA";
// });

const image = document.querySelector("img")

image.onclick = ()=>{
  const imageSource = image.getAttribute("src")
  if(imageSource === "images\\user1.png"){
    image.setAttribute('src', 'https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png');
    image.setAttribute('alt', 'Firefox icon')
  } else {
    image.setAttribute('src', 'images/user1.png');
    image.setAttribute('alt', 'Passport: A close up shot picture of me')
  }
}

function setUserName(){
  const myName = prompt("Please enter your name: ");
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem('name', myName);  localStorage.setItem('name', myName);
    myPageHeading.textContent = `Mozily is cool, ${myName}`;
    myPageHeading.textContent = `Mozily is cool, ${myName}`;
  }

}

if(!localStorage.getItem("name")){
  setUserName();
}else {
  const savedName = localStorage.getItem("name");
  myPageHeading.textContent = `Mozily is cool, ${savedName}`;
}

myButton.onclick = () => {
  setUserName();
};

// or
// document.querySelector("html").addEventListener('click', () => {
//   console.log("Ouch! Stop poking me!")
// })
