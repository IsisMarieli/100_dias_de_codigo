import { React, useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTasklist] = useState([]);
  
  console.log(taskList)
  return (
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
    <h1>Quadro de tarefas</h1>
    <Input taskList={taskList} setTasklist={setTasklist}/>
    
    <div>
      {taskList.map((task, index) => (
        <li key = {index}>{task}</li>
      ))}
    </div>
    
    </div>
  )
}

export default App;
