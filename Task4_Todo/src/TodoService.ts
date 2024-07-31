export interface TodoType {
    id: number;
    task: string;
    completed: boolean;
}
export const intialTodoState: TodoType = {
    id: 0,
    task: "",
    completed: false
}
const TodoService  = {

    // get Todos
    getTodo: () => {
        const TodoStr = localStorage.getItem("todo");

        return TodoStr ? JSON.parse(TodoStr) : [] ;
    },

    // get single Todo

    getSingleTodo: (id:number) => {
        const all_todos = TodoService.getTodo();
        return all_todos.find((todo: TodoType) => todo.id == id);
    },
    // add Todo

    addTodo: (task:string):TodoType  =>{
        const all_todos = TodoService.getTodo();

        const newTodo:TodoType = {
            id: all_todos.length +1,
            task: task,
            completed: false
        }

        const updated_todo = [...all_todos,newTodo]

        localStorage.setItem("todo",JSON.stringify(updated_todo))

        return newTodo
    },

    //update todos
    updateTodo: (todo:TodoType):TodoType => {
        const all_todos = TodoService.getTodo();

        const update_todo = all_todos.map((t:TodoType) => (t.id == todo.id ? todo : t));

        localStorage.setItem("todo",JSON.stringify(update_todo));

        return todo;
    },

    //complete the task
    completeTodo:(id:number):void => {
        const all_todos:TodoType[] = TodoService.getTodo();

        const update_todo = all_todos.map((todo) => (todo.id == id ? {...todo, completed: !todo.completed} : todo));

        localStorage.setItem("todo", JSON.stringify(update_todo))
    },

    // delete Todo

    deleteTodo:(id:number):void => {
        const all_todos:TodoType[] = TodoService.getTodo();
        const update_todo = all_todos.filter((todo) => (todo.id != id))
        localStorage.setItem("todo", JSON.stringify(update_todo))
    }
}

export default TodoService