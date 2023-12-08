import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {TaskDTO} from "../dto/TaskDTO.ts";

type Action = {
    type: "add" | "delete" | "set-list" | "update",
    [property: string] : any
}

const TaskContext = createContext<TaskDTO[]>([]);
const TaskDispatchContext = createContext<React.Dispatch<any>>(()=>{});

function taskReducer(taskList: TaskDTO[], action : Action) {
    if (action.type === "add") {
        return [...taskList, action.task];
    }else if (action.type === "delete") {
        return taskList.filter(task => task.id !== action.id);
    }else if (action.type === "update"){
        const task = taskList.find(t => t.id == action.task.id)!;
        task.status = !task.status;
        return taskList;
    } else {
        return action.taskList;
    }
}

export function TaskProvider({children}: {children: ReactNode}){
    const [taskList, taskDispatcher] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={taskList}>
            <TaskDispatchContext.Provider value={taskDispatcher}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>

    )
}

export function useTaskList(){
    return useContext(TaskContext);
}

export function useTaskDispatcher(){
    return useContext(TaskDispatchContext);
}