import React from 'react';


import './styles.css';

function Modal({ toggle }) {

  return (
    <div className="Modal">
      <div className="title">Your result</div>
      <button onClick={toggle}>Close</button>
    </div>
  )
}

export default Modal;
