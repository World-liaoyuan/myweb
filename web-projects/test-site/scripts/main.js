let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox-icon2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字.");
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    let storeName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storeName;
}

myButton.onclick = function() {
    setUserName();
}



// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello World!"

// let myVariable;
// myVariable = "李雷";
// let myVariable1 = "李雷";
// myVariable;

// myVariable = 10;
// myVariable = true;
// myVariable = [1, '李雷', '韩梅梅', 10];
// myVariable = document.querySelector('h1');

// // + - * / === !== !
// let iceCream = "chocolate"
// if (iceCream === "chocolate"){
//     alert("我最喜欢巧克力冰淇淋.");
// } else {
//     alert("但是巧克力才是我的最爱啊....");
// }

// myVariable = document.querySelector("h1");
// alert("hello!")

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// multiply(4, 7);

// document.querySelector("html").addEventListener("click", function() { 
//     alert("别戳我, 我怕疼.");
// });

// document.querySelector("html").addEventListener("click", () => {
//     alert("别戳我, 我怕疼.");
// });




