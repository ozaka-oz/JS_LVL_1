// задание №1
function changeHello() {
    let button = document.getElementById("helloButton");
    let text = document.getElementById("helloText");
    text.innerHTML = "Привет";
    button.onclick = changePrivet;
}

function changePrivet() {
    let button = document.getElementById("helloButton");
    let text = document.getElementById("helloText");
    text.innerHTML = "Hello";
    button.onclick = changeHello;
}

// задание №2

function changeTag() {
    let textTag = document.querySelector("#dz5z2 > b");
    textTag.parentNode.removeChild(textTag);
    let createTitle = document.createElement("h3");
    createTitle.innerHTML = "Hello";
    document.querySelector("#dz5z2").appendChild(createTitle);
}


// задание №3 - не понимаю почему выдает ошибку в консоли

function changeList() {
    let listItem = document.querySelectorAll("#dz5z3 li");
    let num = 0;
    for (i = 0; i <= listItem.length; i++) {
        num++;
        listItem[i].innerHTML = num + " List";
    }
}


// задание №4

let allInput = document.querySelectorAll("div#calculator input");
let input1 = allInput[0];
let input2 = allInput[1];
let resultTag = document.querySelector("#resultCalc");

function sum() {
    var result = Number(input1.value) + Number(input2.value);
    resultTag.innerHTML = result;
}

function sub() {
    var result = Number(input1.value) - Number(input2.value);
    resultTag.innerHTML = result;
}

function div() {
    var result = Number(input1.value) / Number(input2.value);
    resultTag.innerHTML = result;;
}

function mul() {
    var result = Number(input1.value) * Number(input2.value);
    resultTag.innerHTML = result;
}

// задание №5
function insertLi() {
    let listChange = document.querySelector("li#list");
    let li = document.createElement("li");
    li.innerHTML = "Первый элемент списка";
    listChange.parentNode.insertBefore(li, listChange)
}
