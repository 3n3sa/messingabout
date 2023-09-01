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