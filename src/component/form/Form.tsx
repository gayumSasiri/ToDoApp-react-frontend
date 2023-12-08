import './Form.css';
import React, {useRef, useState} from "react";
import {useTaskDispatcher} from "../../context/TaskContext.tsx";
import {TaskDTO} from "../../dto/TaskDTO.ts";
import {saveTask} from "../../service/task-service.tsx";
import {useUser} from "../../context/UserContext.tsx";

export function Form() {

    const [value, setValue] = useState("");
    const txtRef = useRef<HTMLInputElement>(null);
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        saveTask(new TaskDTO(null,value,null,user?.email!))
            .then(task => {
                taskDispatcher({type: 'add' , task});
                setValue('');
                txtRef.current!.focus();
            }).catch(err => {
                alert(err);
        })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="d-flex gap-2 p-2 border-bottom" action="">
                <input
                    ref={txtRef}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Eg. Finish react to-so- app ASAP!"
                />
                <button className="btn btn-primary">ADD</button>
            </form>
        </>
    );
}