import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

const TextTodo = ({
  value
  ,isBackgroundColorChange
}) => {
  const [todoStyle, setTodoStyle] = useState({});

  useEffect(() => {
    let styled = {
      color: 'aqua'
    }
    if(isBackgroundColorChange){
      styled.backgroundColor = 'gray';
      styled.color = 'white';
    }
    setTodoStyle(styled);
  }, [value, isBackgroundColorChange]);
  return (
    <div style={todoStyle}>
      { value }
    </div>
  )
};

export default connect(
  state => ({
    isBackgroundColorChange: state.base.get('isBackgroundColorChange'),
  }),
  null,
)(TextTodo);
