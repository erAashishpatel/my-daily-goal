import React from "react";
import "./App.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: props.completed,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isCompleted: !prevState.isCompleted,
    }));
  };

  render() {
    const { text } = this.props;
    const { isCompleted } = this.state;

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
        />
        <span className={isCompleted ? "completed" : ""}>{text}</span>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const todoItems = [
      {
        id: 1,
        text: "My Task",
        completed: true,
      },
    ];

    return (
      <div className="app">
        <h1>My Daily Goals</h1>
        {todoItems.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </div>
    );
  }
}

export default App;
