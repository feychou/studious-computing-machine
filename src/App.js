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
import useResult from './useResult';
import QuizSection from './components/QuizSection';
import Header from './components/Header';
import Modal from './components/Modal';

import './App.css';

const quizSections = [ LAYOUT, FRONTEND, BACKEND ];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [
    checked,
    setChecked,
    outcome,
    setOutcome
  ] = useResult();

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const getResult = () => {
    setOutcome();
    toggleModal();
  }

  return (
    <div className="App">
      <div className={`Backdrop ${openModal && 'openModal'}`}>
        <Header />
        {quizSections.map(type => <QuizSection type={type} onChange={setChecked} />)}
        <button onClick={getResult} onKeyPress={toggleModal}>My result</button>
      </div>
      {openModal && <Modal toggle={toggleModal} content={outcome} />}
    </div>
  );
}

export default App;
