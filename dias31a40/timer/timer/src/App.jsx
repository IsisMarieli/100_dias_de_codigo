import { useState, useEffect } from 'react'
import './index.css'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); // Estado do relógio (rodando ou não)

  useEffect(() => {
    let interval;

    if(running){
      interval = setInterval(() => { // Definindo um efeito para que "running seja atualizado a cada 1 seg"
        setTime((prevTime) => prevTime + 10);
      }, 10)
    } else { // se o timer não tiver rodando, vai limpar o intervalo de tempo.
      clearInterval(interval);
    }

    return () => clearInterval(interval) // função de limpeza padrão
  },[running]);

  return (
    <>
    <h1>Timer</h1>
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
      <span>{time % 100 < 10 ? "0" + (time / 10) % 100 : (time / 10) % 100}</span> 
    </div> 
    
    <div>
      { running ? (<button onClick={() => (setRunning(false))}>Stop</button>) : (<button onClick={() => (setRunning(true))}>Start</button>)}
    
      <button onClick={() => { 
        setRunning(0); 
        setTime(0); 
      }}>Reset</button>

    </div>
    </>
  )
}

export default App;
