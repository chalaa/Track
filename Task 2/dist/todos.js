"use strict";
let addTodoDiv = document.getElementById("add");
let updateTodoDiv = document.getElementById("update");
let addTodoButton = document.getElementById("addTodo");
let updateTodoButton = document.getElementById("updateTodo");
let updateTodoInput = document.getElementById("TodoNameUpdate");
let addTodoInput = document.getElementById("TodoName");
let Lists = document.getElementById("lists");
let Todos = [];
updateTodoDiv.style.display = "None";
addTodoButton.onclick = () => {
    if (addTodoButton.style.display != "None") {
        let todo = addTodoInput.value;
        if (todo.length == 0) {
            alert("name field is required");
        }
        else if (Todos.includes(todo)) {
            alert("Todo already exist");
        }
        else {
            addTodoInput.value = "";
            Todos.push(todo);
            clear();
            render();
        }
    }
};
function clear() {
    let child = Lists.lastElementChild;
    while (child) {
        Lists.removeChild(child);
        child = Lists.lastElementChild;
    }
}
function remove(value, arr) {
    return arr.filter(function (item) {
        return item != value;
    });
}
function render() {
    Todos.forEach(todo => {
        let listComponent = document.createElement("div");
        listComponent.style.display = "flex";
        listComponent.style.gap = "5px";
        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = todo;
        paragraphElement.style.marginRight = "5rem";
        let editElement = document.createElement('button');
        editElement.textContent = "Edit";
        editElement.style.height = "25px";
        editElement.style.marginTop = "10px";
        let deleteElement = document.createElement("button");
        deleteElement.textContent = "Delete";
        deleteElement.style.height = "25px";
        deleteElement.style.marginTop = "10px";
        listComponent.appendChild(paragraphElement);
        listComponent.appendChild(editElement);
        listComponent.appendChild(deleteElement);
        Lists.appendChild(listComponent);
        deleteElement.addEventListener("click", () => {
            Todos = remove(todo, Todos);
            clear();
            render();
        });
        editElement.addEventListener("click", () => {
            addTodoDiv.style.display = "None";
            updateTodoDiv.style.display = "block";
            updateTodoInput.value = todo;
            if (updateTodoButton.style.display != "None") {
                updateTodoButton.addEventListener("click", () => {
                    let new_todo = updateTodoInput.value;
                    if (new_todo.length == 0) {
                        alert("name field is required");
                    }
                    else if (Todos.includes(new_todo)) {
                        alert("Todo already exist");
                    }
                    else {
                        for (let i = 0; i < Todos.length; i++) {
                            if (Todos[i] == todo) {
                                Todos[i] = new_todo;
                                break;
                            }
                        }
                        clear();
                        render();
                        addTodoDiv.style.display = "block";
                        updateTodoDiv.style.display = "None";
                    }
                });
            }
        });
    });
}
//# sourceMappingURL=todos.js.map