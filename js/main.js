let mydiv = document.getElementById("div");
let one = document.getElementById("one");
let two = document.getElementById("two");
let suit = document.getElementById("suit");
let shoes = document.getElementById("shoes");
let input = document.getElementById("val1");
let input2 = document.getElementById("val2");
let result = document.getElementById("res")
let child = result.firstElementChild;
mydiv.firstElementChild.onclick = function () {
    one.style.visibility = "visible"
}
mydiv.lastElementChild.onclick = function () {
    two.style.visibility = "visible"
}
suit.onchange = function () {
    document.querySelector("button").style.visibility = "visible"
   suit.value * input.value
}
shoes.onchange = function () {
    document.querySelector("button").style.visibility = "visible"
    shoes.value * input2.value
}
input.onkeyup = function () {
        if (input.value === "" ) {
            alert("the input can’t be empty");
        }
        else if (input.value <= 0 ) {
            alert("the input can’t be zero");
        }
        else if (input.value === 0 ) {
            alert("the input can’t be zero");
        }
        else if (input.value === Number.parseFloat()) {
            alert("the input can’t be float number");
        }
        else if (input.value >= 10) {
            alert("the input can’t be greater than 10");
        }else if (isNaN(input.value)){
            alert("the input can’t be string")
        }
        else{
            document.querySelector("button").onclick = function () {
                result.style.top = "100%"
            child.innerHTML ="price is " + ( (suit.value * input.value) + (shoes.value * input2.value) ) + " " + "le" 
            }
        }
}
input2.onkeyup = function () {
    if (input2.value === "") {
        alert("the input can’t be empty");
    }
    else if (input2.value <= 0) {
        alert("the input can’t be zero");
    }
    else if (input2.value === 0) {
        alert("the input can’t be zero");
    }
    else if ( input2.value === Number.parseFloat()) {
        alert("the input can’t be float number");
    }
    else if ( input2.value >=10) {
        alert("the input can’t be greater than 10");
    }else if (isNaN(input2.value)){
        alert("the input can’t be string")
    }
    else{
        document.querySelector("button").onclick = function () {
            result.style.top = "100%"
            child.innerHTML ="price is " + ( (suit.value * input.value) + (shoes.value * input2.value) ) + " " + "le" 
        }
    }
}
