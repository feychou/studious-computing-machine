import { useState } from 'react';

import {
  FRONTEND,
  LAYOUT,
  BACKEND
} from './quizData';

import QuizSection from './components/QuizSection';
import Header from './components/Header';
import Modal from './components/Modal';

import './App.css';

const quizSections = [ LAYOUT, FRONTEND, BACKEND ];

function App() {
  const [checked, setChecked] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const onChangeChecked = (question, cat) => {
    const newChecked = checked.find(item => item.id === question.id) ?
      checked.filter(item => item.id !== question.id) :
      [...checked, {...question, cat}]

    setChecked(newChecked)
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const getResult = () => {
    const score = checked.reduce((acc, question) => {
      const prop = question.cat;

      return {
        ...acc,
        [prop]: acc[prop] + question.points
      }


    }, {[LAYOUT]: 0, [FRONTEND]: 0, [BACKEND]: 0});

  }


  return (
    <div className="App">
      <div className={`Backdrop ${openModal && 'openModal'}`}>
        <Header />
        {quizSections.map(type => <QuizSection type={type} onChange={onChangeChecked} />)}
        <button onClick={getResult} onKeyPress={toggleModal}>My result</button>
      </div>
      {openModal && <Modal toggle={toggleModal} />}
    </div>
  );
}

export default App;
