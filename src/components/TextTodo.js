import React, {useState, useEffect} from 'react';

// const todoStyle = {
//   color: 'aqua',
// }

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

export default TextTodo;