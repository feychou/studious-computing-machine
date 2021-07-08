import React from 'react';

import { quizData } from '../../quizData';

import './styles.css';

function QuizSection({ type, onChange }) {

  return (
    <section className="QuizSection">
      <div className="title">{type}</div>
      {quizData[type].map(question => (
        <div className={`${question.type.toLowerCase()} entry`}>
          <input
            id={question.id}
            name="client-side-question"
            type="checkbox"
            onChange={() => onChange(question, type)}
          />
          <label htmlFor={question.id}>
            {question.text}
          </label>
        </div>
      ))}
    </section>
  )
}

export default QuizSection;
