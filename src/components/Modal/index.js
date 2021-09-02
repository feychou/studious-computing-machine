import React from 'react';
import {
  LAYOUT,
  FRONTEND,
  BACKEND
} from '../../quizData';

import './styles.css';

function Modal({ toggle, content }) {
  const { main, score, suggestions } = content;
  const total = 100
  return (
    <div className="Modal">
      <h2 className="title">{main.title}</h2>
      <div className="content">
        {main.desc.map(text => <div>{text}</div>)}<br />
        <b>Suggestions</b>
        {suggestions.map(({text, reason}) => <div>{text} since {reason}</div>)}
      </div><br />
      <div className="totalScore">
        <b>Final score</b><br />
        <span className="scoreTag">{LAYOUT}</span>: {score[LAYOUT]}/{total}<br />
        <span className="scoreTag">{FRONTEND}</span>: {score[FRONTEND]}/{total}<br />
        <span className="scoreTag">{BACKEND}</span>: {score[BACKEND]}/{total}
      </div>
      <button onClick={toggle}>Close</button>
    </div>
  )
}

export default Modal;
