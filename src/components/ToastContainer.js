import React, {useState, useEffect} from 'react';
import { Toast } from 'react-bootstrap';

const ToastContainer = ({
  value
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(value){
      setShow(true);
    }else{
      setShow(false);
    }
  }, [value]);

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
      <Toast.Body>{value}</Toast.Body>
    </Toast>
  )
};

export default ToastContainer;