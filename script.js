
function b1clicked() {
    document.body.style.background = "red"; 
    document.getElementById("showcolor").innerHTML = "the color of this is: red"
}

function b2clicked() {
    document.body.style.background = "orange";
    document.getElementById("showcolor").innerHTML = "the color of this is: orange" 
}

function b3clicked() {
    document.body.style.background = "yellow";
    document.getElementById("showcolor").innerHTML = "the color of this is: yellow" 
}

function b4clicked() {
    document.body.style.background = "greenyellow";
    document.getElementById("showcolor").innerHTML = "the color of this is: green/yellow" 
}

function b5clicked() {
    document.body.style.background = "turquoise";
    document.getElementById("showcolor").innerHTML = "the color of this is: turquoise" 
}

function submitted() {
    const bday = document.getElementById("birthdayfield");
    alert("you have added your birthday, "+ bday.value + ", thanks"); 
    alert("imagine trusting me with your birthday.. heehee... ")
}

function add() {
    const num1 = document.getElementById("no1"); 
    const num2 = document.getElementById("no2"); 
    const ans = parseInt(num1.value) + parseInt(num2.value);
    const sumans = document.getElementById("answer"); 
    sumans.innerText = `the sum is: ${ans}`; 
}