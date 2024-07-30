let addTodoDiv: HTMLDivElement = document.getElementById("add") as HTMLDivElement
let updateTodoDiv: HTMLDivElement = document.getElementById("update") as HTMLDivElement
let addTodoButton: HTMLButtonElement  = document.getElementById("addTodo") as HTMLButtonElement
let updateTodoButton: HTMLButtonElement  = document.getElementById("updateTodo") as HTMLButtonElement
let updateTodoInput: HTMLInputElement = document.getElementById("TodoNameUpdate") as HTMLInputElement
let addTodoInput: HTMLInputElement = document.getElementById("TodoName") as HTMLInputElement
let Lists: HTMLDivElement = document.getElementById("lists") as HTMLDivElement

let Todos: string[] = []
updateTodoDiv.style.display = "None"


addTodoButton.onclick = () =>{
    if (addTodoButton.style.display != "None"){
    
    let todo: string  = addTodoInput.value
    if (todo.length == 0) {
        alert("name field is required")
    }
    else if (Todos.includes(todo)){
        alert("Todo already exist")
    }
    else{
        addTodoInput.value = ""
        Todos.push(todo)
        clear()
        render()
    }
}

}

function clear(): void{
    let child = Lists.lastElementChild
    while(child){
        Lists.removeChild(child)
        child = Lists.lastElementChild
    }
}

function remove(value:string,arr:string[]): string[]{
    return arr.filter(function(item){
        return item !=  value
    })
}


function render() {
    Todos.forEach(todo => {
        let listComponent: HTMLDivElement = document.createElement("div")
        listComponent.style.display = "flex"
        listComponent.style.gap = "5px"

        let paragraphElement: HTMLParagraphElement = document.createElement("p")
        paragraphElement.textContent = todo
        paragraphElement.style.marginRight = "5rem"

        let editElement: HTMLButtonElement = document.createElement('button')
        editElement.textContent = "Edit"
        editElement.style.height = "25px"
        editElement.style.marginTop = "10px"

        let deleteElement: HTMLButtonElement = document.createElement("button")
        deleteElement.textContent = "Delete"
        deleteElement.style.height = "25px"
        deleteElement.style.marginTop = "10px"

        listComponent.appendChild(paragraphElement)
        listComponent.appendChild(editElement)
        listComponent.appendChild(deleteElement)

        Lists.appendChild(listComponent)

        deleteElement.addEventListener("click", () => {
            Todos = remove(todo,Todos)
            clear()
            render()
        })

        editElement.addEventListener("click", () => {
            addTodoDiv.style.display = "None"
            updateTodoDiv.style.display = "block"
            updateTodoInput.value = todo
            if (updateTodoButton.style.display != "None"){
            updateTodoButton.addEventListener("click", ()=>{

                let new_todo: string = updateTodoInput.value

                if (new_todo.length == 0) {
                    alert("name field is required")
                }
                else if (Todos.includes(new_todo)){
                    alert("Todo already exist")
                }
                else{
                    for (let i = 0; i < Todos.length; i++) {
                        if (Todos[i] == todo){
                            Todos[i] = new_todo
                            break
                        } 
                    }
                    clear()
                    render()

                    addTodoDiv.style.display = "block"
                    updateTodoDiv.style.display = "None"
                }

            })
        }


        })
    });

}