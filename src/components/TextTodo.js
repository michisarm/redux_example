import React from 'react';

const todoStyle = {
  color: 'aqua',
}

const TextTodo = ({
  value
}) => {
  return (
    <div style={todoStyle}>
      { value }
    </div>
  )
};

export default TextTodo;