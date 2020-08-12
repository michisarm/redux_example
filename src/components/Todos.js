import React, { Component } from 'react';

import Todo from './Todo';
import AddTodo from './AddTodo';

class Todos extends Component {

    //Component state with default values
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                value: "todo 1",
                isDone: false
            },
            {
                id: 2,
                value: "todo 2",
                isDone: true
            },
            {
                id: 3,
                value: "todo 3",
                isDone: false
            }
        ],
        isBackgroundColorChange: false
    }

    //Local helper method to get date
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    //method called from Todo component
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
        this.defaultBackgroundColor();
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
        this.defaultBackgroundColor();
    }

    //method called from AddTodo component
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
            this.defaultBackgroundColor();
        } else {
            console.log("Please Add Todo Text");
        }
    }

    handleChangeBockground = (value) => {
      let pattern_num = /[0-9]/;	// 숫자 
      let pattern_eng = /[a-zA-Z]/;	// 문자 
      if( !pattern_num.test(value) && pattern_eng.test(value)){
        this.setState({isBackgroundColorChange: true});
      }else {
        this.setState({isBackgroundColorChange: false});
      }
    }

    defaultBackgroundColor = () => {
      this.setState({isBackgroundColorChange: false});
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo isBackgroundColorChange={this.state.isBackgroundColorChange} index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo handleChangeBockground={this.handleChangeBockground} fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;