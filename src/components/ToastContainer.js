import React, {useState, useEffect} from 'react';
import { Toast } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const ToastContainer = ({
  value
}) => {
  const [show, setShow] = useState(false);
  const toastValue = useSelector(state => state.test.get('toastValue'));
  
  useEffect(() => {
    if(toastValue){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [toastValue]);

  return (
    <Toast
      onClose={() => setShow(false)} 
      show={show} 
      delay={2000} 
      autohide
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 300
      }}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">알림</strong>
      </Toast.Header>
      <Toast.Body>{toastValue}</Toast.Body>
    </Toast>
  )
};

export default ToastContainer;