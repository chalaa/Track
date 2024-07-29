addTodoButton = document.querySelector("button")
todoName = document.querySelector("input")
const lists = document.getElementById("lists")

// this code will render if we have todos in the local storage
todos = localStorage.getItem("todos")
if(todos){
    render(todos)
}

// this will listen for the button click and the todo to the localstorage
addTodoButton.onclick = () => {
    todo = document.getElementsByTagName("input")[0].value
    document.getElementsByTagName("input")[0].value = ""
    if (!todo){
        alert("please add your Todo first")
    }else{
        addTodo(todo)
    }
}


// this function will render the Todos 
function render(todos){
    todo_list = todos.split(",")

    todo_list.forEach(todo => {
        
        const paragraphElement = document.createElement("p")
        paragraphElement.textContent = todo

        lists.appendChild(paragraphElement)

        paragraphElement.addEventListener("click",()=>{
            lists.removeChild(paragraphElement)
            
            todos = localStorage.getItem("todos")
            todo_list = todos.split(",")
            todo_list = remove(todo,todo_list)
            todos = todo_list.join(",")  
            localStorage.setItem("todos",todos)
        })


    });
}

// this function will delete the value form the Array
function remove(value,arr){
    return arr.filter(function(item){
        return item !=  value
    })
}

// this function will add the todo to the local storage
function addTodo(todo){
    if (!localStorage.getItem("todos")){
        
        localStorage.setItem("todos",todo)
        render(todo)
    }
    else{
        todos = localStorage.getItem("todos")
        todo_list = todos.split(",")
        if (todo_list.includes(todo)){
            alert("Todo already Added to the Todos List")
        }else{
            todo_list.push(todo)
            todos = todo_list.join(",")  
            localStorage.setItem("todos",todos)

            clearTodos()
            render(todos)
        }
    }
}

// this function will clear the todo list from the lists
function clearTodos(){
    let child = lists.lastElementChild
    while(child){
        lists.removeChild(child)
        child = lists.lastElementChild
    }
}



