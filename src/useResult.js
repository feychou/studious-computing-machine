import { useState, useEffect } from "react";
import {
  FRONTEND,
  LAYOUT,
  BACKEND,
  AUTH,
  PRIVATE_ROUTES,
  READ_DATA,
  WRITE_DATA,
  RES_DESIGN,
  GAME_LOGIC
} from './quizData';
import {
  outcomes,
  FULL_STACK_AUTH,
  FULL_STACK,
  ADVANCED_SPA,
  MEDIUM_SPA,
  SIMPLE_SPA,
  MINIMAL_CLIENT,
  MINIMAL_UI,
  DATA_FETCHING,
  PUBLIC_API,
  RESPONSIVE_DESIGN as RES_DESIGN_SUGG,
  GAME
} from './outcomes';

const initialScore = {[LAYOUT]: 0, [FRONTEND]: 0, [BACKEND]: 0};
const initialOutcome = {
  main: outcomes[SIMPLE_SPA],
  suggestions: [],
  score: initialScore
}

function useResult() {
  const [checked, setChecked] = useState([])
  const [outcome, setOutcome] = useState(initialOutcome);

  useEffect(() => {
    setOutcome({
      ...outcome,
      main: chooseOutcome()
    })
  }, [outcome.score])

  useEffect(() => {
    setOutcome({
      ...outcome,
      suggestions: getSuggestions()
    })
  }, [outcome.main])

  const onChangeChecked = (question, cat) => {
    const newChecked = checked.find(item => item.id === question.id) ?
      checked.filter(item => item.id !== question.id) :
      [...checked, {...question, cat}]

    setChecked(newChecked)
  }

  const doTheyKnowAuth = () => {
    const authChecked = checked.filter(item => item.id === AUTH || item.id === PRIVATE_ROUTES)
    return authChecked.length === 2
  }

  const doTheyKnowFetch = () => {
    const fetchChecked = checked.filter(item => item.id === READ_DATA || item.id === WRITE_DATA)
    return fetchChecked.length === 2
  }

  const getSuggestions = () => {
    const { main, score } = outcome;
    const { highlights } = main

    const scoreLayout = score[LAYOUT];
    const scoreFrontend = score[FRONTEND];

    const suggestions = highlights.reduce((acc, sugg) => {
      switch(sugg) {
        case(MINIMAL_UI): 
          if (scoreLayout < 60) {
            return [...acc, MINIMAL_UI]
          }
          return acc;
        case(MINIMAL_CLIENT):
          if (scoreFrontend < 60) {
            return [...acc, MINIMAL_CLIENT]
          }
          return acc;
        case(DATA_FETCHING):
          if (!doTheyKnowFetch()) {
            return [...acc, DATA_FETCHING]
          }
          return acc;
        case(PUBLIC_API):
          if (doTheyKnowFetch()) {
            return [...acc, PUBLIC_API]
          }
          return acc;
        case(RES_DESIGN_SUGG):
          if (checked.find(item => item.id === RES_DESIGN)) {
            return [...acc, RES_DESIGN_SUGG]
          }
          return [...acc, RES_DESIGN_SUGG]
        case(GAME):
          if (checked.find(item => item.id === GAME_LOGIC)) {
            return [...acc, GAME]
          }
          return acc;
        default:
          return acc;
      }
    }, []);

    return suggestions
  }

  const chooseOutcome = () => {
    const { score } = outcome;
    const scoreBackend = score[BACKEND];
    const scoreFrontend = score[FRONTEND];

    const auth = doTheyKnowAuth();

    if (scoreBackend > 60 && auth) {
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


    }, initialScore);

    setOutcome({...outcome, score})
  }

  return [ onChangeChecked, outcome, getResult ];
}

export default useResult;
