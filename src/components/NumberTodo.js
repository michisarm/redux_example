import React from 'react';

const todoStyle = {
  color: 'blue',
}

const NumberTodo = ({
  value
}) => {
  return (
    <div style={todoStyle}>
      { value }
    </div>
  )
};

export default NumberTodo;