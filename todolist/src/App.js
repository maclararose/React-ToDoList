import React, {Component} from 'react';
import TodoList from './components/TodoList/index.js';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }
  
  render(){
    return(
      <div className="container">
        <h1 className="titulo">Lista de tarefas</h1>
        <TodoList className="listy"/>
      </div>
    );
  }
}

export default App;