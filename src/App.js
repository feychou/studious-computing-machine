import { useState } from 'react';

import {
  CLIENT_SIDE,
  LAYOUTING,
  SERVER_SIDE
} from './quizData';
import QuizSection from './components/QuizSection';
import Header from './components/Header';

import './App.css';

const quizSections = [ CLIENT_SIDE, LAYOUTING, SERVER_SIDE ];

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
      
      <div className="Modal">
        <div className="ModalTitle">Your result</div>
      </div>
    </div>
  );
}

export default App;
