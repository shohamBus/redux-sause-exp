import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//change the imports here & at index file
import { Creators as TodoActions } from "./store/ducks/todos";
// import * as TodoActions  from './store/whithoutSause/actions/todos'

import "./styles.css";

class TodoList extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.input.value);

    this.input.value = "";
  };

  render() {
    const { todos, toggleTodo, removeTodo } = this.props;

    return (
      <section>
        <h1>To do list</h1>
        <form onSubmit={this.handleSubmit}>
          <input ref={el => (this.input = el)} />
          <button type="submit">Submit</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.complete ? <s>{todo.text}</s> : todo.text}
              <div>
                <button onClick={() => toggleTodo(todo.id)}>isDone</button>
                <button onClick={() => removeTodo(todo.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
