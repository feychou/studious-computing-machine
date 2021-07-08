import { useState } from 'react';

import {
  FRONTEND,
  LAYOUT,
  BACKEND,
  AUTH,
  PRIVATE_ROUTES
} from './quizData';
import {
  outcomes,
  FULL_STACK_AUTH,
  FULL_STACK,
  ADVANCED_SPA,
  MEDIUM_SPA,
  SIMPLE_SPA
} from './outcomes';
import QuizSection from './components/QuizSection';
import Header from './components/Header';
import Modal from './components/Modal';

import './App.css';

const quizSections = [ LAYOUT, FRONTEND, BACKEND ];

function App() {
  const [checked, setChecked] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [outcome, setOutcome] = useState(outcomes[SIMPLE_SPA]);

  const onChangeChecked = (question, cat) => {
    const newChecked = checked.find(item => item.id === question.id) ?
      checked.filter(item => item.id !== question.id) :
      [...checked, {...question, cat}]

    setChecked(newChecked)
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const chooseOutcome = (score) => {
    const scoreBackend = score[BACKEND];
    const scoreFrontend = score[FRONTEND];

    if (scoreBackend > 60 && checked.find(item => item.id === AUTH) && checked.find(item => item.id === PRIVATE_ROUTES)) {
      return outcomes[FULL_STACK_AUTH]
    }

    if (scoreBackend > 60) {
      return outcomes[FULL_STACK]
    }

    if (scoreFrontend > 70) {
      return outcomes[ADVANCED_SPA]
    }

    if (scoreFrontend <= 70 && score[FRONTEND] > 40) {
      return outcomes[MEDIUM_SPA]
    }

    return outcomes[SIMPLE_SPA]
  }

  const getResult = () => {
    const score = checked.reduce((acc, question) => {
      const prop = question.cat;

      return {
        ...acc,
        [prop]: acc[prop] + question.points
      }


    }, {[LAYOUT]: 0, [FRONTEND]: 0, [BACKEND]: 0});

    setOutcome(chooseOutcome(score))
    toggleModal()
  }

  return (
    <div className="App">
      <div className={`Backdrop ${openModal && 'openModal'}`}>
        <Header />
        {quizSections.map(type => <QuizSection type={type} onChange={onChangeChecked} />)}
        <button onClick={getResult} onKeyPress={toggleModal}>My result</button>
      </div>
      {openModal && <Modal toggle={toggleModal} content={outcome} />}
    </div>
  );
}

export default App;
