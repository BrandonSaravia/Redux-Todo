import React from 'react';
import { connect } from 'react-redux';


import { addTodo, toggleCompleted } from '../actions';

class TodoList extends React.Component {
    state = {
        newTask: ''
    };

    handleChanges = e => {
        this.setState({
            newTask: e.target.value
        });
    };

    addTask = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask);
        this.setState({ newTask: '' });
    };

    toggleComplete = id => {
        this.props.toggleCompleted(id)
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <div>

                    {this.props.todos.map((todo, index) => 
                    <h3 onClick={() => {this.toggleComplete(todo.id)}} className={todo.taskStatus ? 'completed' : null}>
                        {todo.task}
                    </h3>)}

                </div>

                <input 
                    type='text'
                    value={this.state.newTask}
                    placeholder='Add a Task'
                    onChange={this.handleChanges}
                />

                <button onClick={this.addTask}>Add Task</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    {addTodo, toggleCompleted}
)(TodoList);