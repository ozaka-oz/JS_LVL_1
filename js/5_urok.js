// задание №1
function changeHello () {
    let button = document.getElementById("helloButton");
    let text = document.getElementById("helloText");
    text.innerHTML = "Привет";
    button.onclick = changePrivet;
}

function changePrivet () {
    let button = document.getElementById("helloButton");
    let text = document.getElementById("helloText");
    text.innerHTML = "Hello";
    button.onclick = changeHello;
}

// задание №2

function changeTag() {
    let textTag = document.querySelector ("#dz5z2 > b");
    textTag.parentNode.removeChild(textTag);
    let createTitle = document.createElement("h3");
    createTitle.innerHTML = "Hello";
    document.querySelector("#dz5z2").appendChild(createTitle);
}


// задание №2


function changeList() {
    let listItem = document.querySelectorAll ("#dz5z3 li");
    console.log(listItem[0]);
    let num = 0;
    for (i = 0; i <= listItem.length; i++) {
        num++;
        listItem[i].innerText = num + " List";
    }
}
