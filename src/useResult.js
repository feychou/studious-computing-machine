import { useState } from "react";
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

const initialOutcome = outcomes[SIMPLE_SPA]
const initialScore = {[LAYOUT]: 0, [FRONTEND]: 0, [BACKEND]: 0};

const chooseOutcome = (score, doTheyKnowAuth) => {
  const scoreBackend = score[BACKEND];
  const scoreFrontend = score[FRONTEND];

  if (scoreBackend > 60 && doTheyKnowAuth) {
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

function useResult() {
  const [checked, setChecked] = useState([])
  const [outcome, setOutcome] = useState(initialOutcome);

  const onChangeChecked = (question, cat) => {
    const newChecked = checked.find(item => item.id === question.id) ?
      checked.filter(item => item.id !== question.id) :
      [...checked, {...question, cat}]

    setChecked(newChecked)
  }

  const doTheyKnowAuth = () => {
    return (
      checked.find(item => item.id === AUTH) &&
      checked.find(item => item.id === PRIVATE_ROUTES)
    )
  }

  const getResult = () => {
    const score = checked.reduce((acc, question) => {
      const prop = question.cat;

      return {
        ...acc,
        [prop]: acc[prop] + question.points
      }


    }, initialScore);

    setOutcome(chooseOutcome(score, doTheyKnowAuth()))
  }

  return [ onChangeChecked, outcome, getResult ];
}

export default useResult;
