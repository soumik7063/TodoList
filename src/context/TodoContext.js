import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:2,
            todo:"my first todo",
            Completed: false
        }
    ],
    addTodo : (todo)=> {},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete: (id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const UseTodo = () =>{
    return useContext(TodoContext)
}