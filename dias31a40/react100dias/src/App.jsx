import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import CondicionalComponent from './components/CondicionalComponent';
import Counter from './components/Counter';
import GithubUser from './components/GithhubUser';


function App() {

  return (
    <div>
      <MyComponent
        title="Título via propriedades(props)"
        description="Descrição via propriedades(props)"
      />
      <CondicionalComponent/>
      <Counter/>
      <GithubUser
      userName="IsisMarieli"
      />
    </div>
  )
}

export default App;
