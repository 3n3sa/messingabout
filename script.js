
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
let cart = []; 

// representing each item in the cart 
class Item { 
    constructor(name, price) {
        this.name = name; 
        this.price = price; 
    }
}

// redraw ui when state is updated 
function refreshUI() {
    totalpriceelement.innerHTML = `total price: £${totalprice}`; 
    parentlistelement.innerHTML = " "; 
    console.log(cart)

    cart.forEach((item, index) => {
        const listelement = document.createElement("li"); 
        const textnode = document.createTextNode(`${item.name} - ${item.price}`); 

        listelement.appendChild(textnode); 
        parentlistelement.appendChild(listelement); 
        listelement.classList.add("list-group-item", "d-flex", "justify-content-between"); 

        const deletebutton = document.createElement("button"); 
        const deletetextnode = document.createTextNode("delete"); 
        deletebutton.appendChild(deletetextnode); 
        deletebutton.classList.add("btn", "btn-danger"); 
        listelement.appendChild(deletebutton); 

        deletebutton.addEventListener("click", () => { // short way of doing a function 
            cart.splice(index, 1) // removing from the list 
            totalprice -= item.price; // taking it away from the total price 
            refreshUI(); 
        });
    }) 
}

function additem(form) {
    const itemname = form.itemname.value; 
    const itemprice = form.itemprice.value;

    totalprice += parseInt(itemprice);
    const item = new Item(itemname, parseInt(itemprice))
    cart.push(item) 
    
    refreshUI(); // call refreshUI because the state of the application has change 

    return false; 
}

const todolistelement = document.getElementById("usertodolist");

function addtodo(form) {
    const task = form.task.value;

    const todolistinfo = document.createElement("li");
    todolistinfo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    const taskText = document.createElement("span");
    taskText.textContent = task;
    todolistinfo.appendChild(taskText);

    const deletetodo = document.createElement("button");
    deletetodo.textContent = "delete";
    deletetodo.classList.add("btn", "btn-outline-danger", "ms-auto");
    deletetodo.style.marginLeft = "auto"; // Align button to the right
    todolistinfo.appendChild(deletetodo);

    deletetodo.addEventListener("click", function() {
        todolistinfo.remove();
    });

    const completetodo = document.createElement("button");
    completetodo.textContent = "completed";
    completetodo.classList.add("btn", "btn-outline-success", "ms-2");
    completetodo.style.marginLeft = "auto";
    todolistinfo.appendChild(completetodo);

    completetodo.addEventListener("click", function() {
        taskText.classList.toggle("crossed-out");
    });

    todolistelement.appendChild(todolistinfo);

    form.task.value = ""; // Clear the input field

    return false; // prevents form submission
}
