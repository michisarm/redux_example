import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../store/modules/base';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }
    
    handleChangeBackground = (value) =>{
      const { BaseActions } = this.props;
        let pattern_num = /[0-9]/;	// 숫자 
        let pattern_eng = /[a-zA-Z]/;	// 문자 
        if( !pattern_num.test(value) && pattern_eng.test(value)){
          BaseActions.showBackgroundColor();
        }else {
          BaseActions.hideBackgroundColor();
        }
    }

    handleChange = (e) => {
        this.handleChangeBackground(e.target.value);
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.addTodo();
        }
    };

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
        this.handleChangeBackground("");
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default connect(
  null,
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(AddTodo);
