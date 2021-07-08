import React from 'react';


import './styles.css';

function Modal({ toggle, content }) {

  return (
    <div className="Modal">
      <div className="title">{content.title}</div>
      <div className="content">
        {content.desc.map(text => <p>{text}</p>)}
      </div>
      <button onClick={toggle}>Close</button>
    </div>
  )
}

export default Modal;
