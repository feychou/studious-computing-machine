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

  const onChangeChecked = (question) => {
    const newChecked = checked.includes(question) ?
      checked.filter(item => item !== question) :
      [...checked, question]

    setChecked(newChecked)
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  } 

  return (
    <div className="App">
      <div className={`Backdrop ${openModal && 'openModal'}`}>
        <Header />
        {quizSections.map(type => <QuizSection type={type} onChange={onChangeChecked} />)}
        <button onClick={toggleModal} onKeyPress={toggleModal}>My result</button>
      </div>
      {openModal && <Modal toggle={toggleModal} />}
    </div>
  );
}

export default App;
