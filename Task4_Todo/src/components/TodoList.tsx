import React, { useState } from "react";
import TodoService,{TodoType,intialTodoState} from "../TodoService"

const TodoList:React.FC = () => {

    const [task, setTask] = useState("")
    const [todo, setTodo] = useState(TodoService.getTodo)
    const [editForm, setEditForm] = useState(true)
    const [todoUpdated, setTodoUpdated] = useState(intialTodoState)

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handeladdTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        TodoService.addTodo(task)
        setTodo(TodoService.getTodo())
        setTask("")
    }   

    const handelEditTodo = (id: number) => {
        const todo:TodoType = TodoService.getSingleTodo(id)
        setEditForm(false)
        setTask(todo.task)
        setTodoUpdated(todo)
    }

    const handelDeleteTodo = (id: number) => {
        TodoService.deleteTodo(id)
        setTodo(TodoService.getTodo())
    }
    
    const handelupdateTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        TodoService.updateTodo({
            id: todoUpdated.id,
            task: task,
            completed: false
        })
        setTodo(TodoService.getTodo())
        setTask("")
        setTodoUpdated(intialTodoState)
        setEditForm(true)
    }

    const handelCompleted = (id:number) => {
        TodoService.completeTodo(id)
        setTodo(TodoService.getTodo())
    }

    return (
        <>
        <div className="flex justify-center gap-6 mt-10">
        <div >
            <div >
                {editForm ? 
                    <form onSubmit={handeladdTodo}  className="flex gap-3">
                        <input type="text" name="todo" value={task} className= "rounded-lg pl-3" onChange={handelChange} />
                        <button type="submit" className= "text-white bg-blue-700 px-2 rounded-lg text-md">Add Todo</button>
                    </form>

                :
                    <form onSubmit={handelupdateTodo}  className="flex gap-3">
                        <input type="text" name="todo" value={task} className= "rounded-lg pl-3" onChange={handelChange} />
                        <button type="submit" className= "text-white bg-blue-700 px-2 rounded-lg text-md">update Todo</button>
                    </form>
                }
            </div>
            <div >
            {
                    todo.map((item:TodoType) => (
                        <div key={item.id} className= "flex  mt-2 gap-3">
                            <input type="checkbox" name="" id="" onClick={()=>handelCompleted(item.id)}/>
                            <p className= "text-white text-left flex">{item.task}</p>
                            <div className="flex gap-3">
                            <button className=" text-white bg-blue-700 rounded-lg px-2 text-md" onClick = {() => handelEditTodo(item.id)}>edit</button>
                            <button className = "text-white bg-red-700 rounded-lg px-2 text-md" onClick = {() => handelDeleteTodo(item.id) }>delete</button>
                            </div>
                        </div>
                    ))

                }
                
            </div>
        </div>
        
        <div>
            <div className=" flex gap-3">
                <div>
                    <div>
                    <p className=" text-white bg-blue-700 rounded-lg px-2 text-md" >Completed Task</p>
                    {
                        todo.map((item:TodoType) => (
                            item.completed && <p className= "text-white text-left flex" key={item.id}>{item.task}</p>
                        ))
                    }
                    </div>
                    
                </div>
                <div>
                    <div>
                    <p className=" text-white bg-blue-700 rounded-lg px-2 text-md" >unCompleted Task</p>
                    {
                        todo.map((item:TodoType) => (
                            !item.completed && <p className= "text-white text-left flex" key={item.id}>{item.task}</p>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default TodoList;