import { React, useEffect } from "react";

const Board = ({ task, index, taskList, setTasklist }) => {
    const handlDelete = () => {
        let removeIndex = taskList.indexOf(task); // remover a task
        taskList.splice(removeIndex, 1); // remover a task do index que quero
        setTasklist((currentTasks => currentTasks.filter(todo => index === removeIndex))); // estado da task a ser removida
    }

    return (
        <>
            <div className=" max-w-md rounded-xl flex-col items-center justify-start
            border text-center text-lg pt-3 pb-4 px-4 md:px-6">
                <p>{task}</p>
                <button onClick={handlDelete} className="bg-red-500 text-white rounded-lg py-2 px-1 mt-4">
                    Delete
                </button> // botão para deletar as tasks

            </div>
        </>
    )
}

export default Board;