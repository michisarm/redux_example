import React from 'react';

const todoStyle = {
  color: 'red',
}

const MixTodo = ({
  value
}) => {
  return (
    <div style={todoStyle}>
      { value }
    </div>
  )
};

export default MixTodo;