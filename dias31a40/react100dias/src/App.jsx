import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import CondicionalComponent from './components/CondicionalComponent';


function App() {

  return (
    <div>
      <MyComponent
        title="Título via propriedades(props)"
        description="Descrição via propriedades(props)"
      />
      <CondicionalComponent/>
    </div>
  )
}

export default App;
