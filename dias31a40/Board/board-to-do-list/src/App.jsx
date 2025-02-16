import { React, useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTasklist] = useState([]);


  console.log(taskList)
  return (
    <>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
    <h1>Quadro de tarefas</h1>
    <Input taskList={taskList} setTasklist={setTasklist}/>
    </div>
    
    <div className="flex flex-wrap gap-4 mt-4">
      {taskList.map((task, index) => (
        <Board 
        key={index} 
        task={task}
        index={index}
        taskList={taskList}
        setTasklist={setTasklist}/>
      ))}
    </div>

    </>
  )
}

export default App;
