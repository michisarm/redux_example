import React, { Component } from 'react';

import MixTodo from './MixTodo';
import NumberTodo from './NumberTodo';
import TextTodo from './TextTodo';

class Todo extends Component {

    render() {
        return (
            <React.Fragment >
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
                <td style={{ width: 15 }} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
                <td style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </React.Fragment>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone){
          return <s>{this.props.todo.value}</s>;
        }else{
          let str = this.props.todo.value;
          let pattern_num = /[0-9]/;	// 숫자 
          let pattern_eng = /[a-zA-Z]/;	// 문자 
          if( pattern_num.test(str) && pattern_eng.test(str)){
            return <MixTodo value={str}/>
          } else if( pattern_num.test(str)){
            return <NumberTodo value={str}/>
          } else {
            return <TextTodo isBackgroundColorChange={this.props.isBackgroundColorChange} value={str} />
          }
        }
    }

}

export default Todo;