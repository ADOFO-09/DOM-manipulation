var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""   
}

function addEventAfterClick(){
    if(input.value.length > 0){
        createListElement();
       }
}

function addEventAfterEnter(){
    if(input.value.length > 0 && event.keyCode === 13){
        createListElement();
       }
}

button.addEventListener("click", addEventAfterClick);                                            

input.addEventListener("keypress", addEventAfterEnter);