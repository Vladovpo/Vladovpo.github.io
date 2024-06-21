  var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/smellypicture.jpg") {
    myImage.setAttribute("src", "images/smelly-second.jpeg");
  } else {
    myImage.setAttribute("src", "images/smellypicture.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Thanks for smelling, " + storedName + "!";
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Thanks for smelling, " + storedName + "!";
  }

  myButton.onclick = function () {
    setUserName();
  };
  