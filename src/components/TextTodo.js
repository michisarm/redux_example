import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'

const TextTodo = ({
  value
}) => {
  const [todoStyle, setTodoStyle] = useState({});
  const isBackgroundColorChange = useSelector(state => state.base.get('isBackgroundColorChange'))

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
