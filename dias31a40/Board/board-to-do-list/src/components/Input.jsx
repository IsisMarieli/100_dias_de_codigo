import React from "react"
import { useState } from "react"

const Input = ({taskList, setTasklist}) => {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasklist([...taskList, input]);
        setInput("");
    }

    return(
        <>
            <form className="flex flex-row items-center gap-3">
                <input type="text" 
                    className="border rounded-lg py-1.5 px-2.5 text-lg "
                    placeholder="Adicione uma tarefa"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleAddTask} 
                className="bg-violet-400 text-white py-2 px-3.5 
                rounded-lg font-semibold">Adicionar tarefa</button>
            </form>
        </>
    )
}

export default Input;