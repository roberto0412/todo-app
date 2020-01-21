import React from 'react';
import Todos from './Todos'


function App() {
  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play mario kart'}
    ]
  }
  return (
    <div className="App">
      <h1 className="center blue-text">Todos's</h1>
      <Todos Todos={this.state.todos}/>
     
    </div>
  );
}

export default App;
