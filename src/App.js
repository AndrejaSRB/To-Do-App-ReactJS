import React, { Component } from 'react';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Cook some lunch"}
    ]
  };
  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos})
  };
  addToDo = todo => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo];
    this.setState({todos})
  };
  render() {
    return (
      <div className="todo-app container">
        <h3 className="center black-text">Todo list</h3>
        <Todos 
        todos={this.state.todos}
        deleteToDo={this.deleteToDo}
        />
        <AddTodo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
