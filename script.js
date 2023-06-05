
function b1clicked() {
    document.body.style.background = "red"; 
    document.getElementById("showcolor").innerHTML = "the color of this page is: red"
}

function b2clicked() {
    document.body.style.background = "orange";
    document.getElementById("showcolor").innerHTML = "the color of this page is: orange" 
}

function b3clicked() {
    document.body.style.background = "yellow";
    document.getElementById("showcolor").innerHTML = "the color of this page is: yellow" 
}

function b4clicked() {
    document.body.style.background = "greenyellow";
    document.getElementById("showcolor").innerHTML = "the color of this page is: green/yellow" 
}

function b5clicked() {
    document.body.style.background = "turquoise";
    document.getElementById("showcolor").innerHTML = "the color of this page is: turquoise" 
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

function formSubmit(form) {
    alert(form.fname.value); 
    alert(form.lname.value);
    alert(form.pass.value);
    return false; 
}

const totalpriceelement = document.getElementById("totalprice");
const parentlistelement = document.getElementById("list"); 
let totalprice = 0; 


function additem(form) {
    const itemname = form.itemname.value; 
    const itemprice = form.itemprice.value;

    totalprice += parseInt(itemprice); 
    totalpriceelement.innerHTML = `total price: £${totalprice}`; 
    
    const listelement = document.createElement("li"); 
    const textnode = document.createTextNode(`${itemname} - ${itemprice}`); 

    listelement.appendChild(textnode); 
    parentlistelement.appendChild(listelement); 
    listelement.classList.add("list-group-item", "d-flex", "justify-content-between"); 

    const deletebutton = document.createElement("button"); 
    const deletetextnode = document.createTextNode("delete"); 
    deletebutton.appendChild(deletetextnode); 
    deletebutton.classList.add("btn", "btn-danger"); 
    listelement.appendChild(deletebutton); 

    deletebutton.addEventListener("click", () => { // short way of doing a function 
        listelement.remove(); // removing from the list 
        totalprice -= parseInt(itemprice); // taking it away from the total price 
        totalpriceelement.innerText = `total price: £${totalprice}`; // changing the total price 
    })

    return false; 
}