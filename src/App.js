import { useState } from 'react';

import {
  FRONTEND,
  LAYOUT,
  BACKEND
} from './quizData';

import QuizSection from './components/QuizSection';
import Header from './components/Header';

import './App.css';

const quizSections = [ LAYOUT, FRONTEND, BACKEND ];

function App() {
  const [checked, setChecked] = useState([]);


  const onChangeChecked = (question) => {
    const newChecked = checked.includes(question) ?
      checked.filter(item => item !== question) :
      [...checked, question]

    setChecked(newChecked)
  }


  return (
    <div className="App">

      <Header />
      {quizSections.map(type => <QuizSection type={type} onChange={onChangeChecked} />)}
      <button>My result</button>
      <div className="Modal">
        <div className="ModalTitle">Your result</div>
      </div>

    </div>
  );
}

export default App;
