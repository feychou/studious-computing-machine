import { useState } from "react";
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
  ADVANCED_APP,
  INTERMEDIATE_APP,
  SIMPLE_APP,
  MINIMAL_CLIENT,
  MINIMAL_UI,
  DATA_FETCHING,
  PUBLIC_API,
  RESPONSIVE_DESIGN as RES_DESIGN_SUGG,
  GAME,
  suggestions as allSuggestions
} from './outcomes';

const initialScore = {[LAYOUT]: 0, [FRONTEND]: 0, [BACKEND]: 0};
const initialOutcome = {
  main: outcomes[SIMPLE_APP],
  suggestions: [],
  score: initialScore
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
    const authChecked = checked.filter(item => item.id === AUTH || item.id === PRIVATE_ROUTES)
    return authChecked.length === 2
  }

  const doTheyKnowFetch = () => {
    const fetchChecked = checked.filter(item => item.id === READ_DATA || item.id === WRITE_DATA)
    return fetchChecked.length === 2
  }

  const getSuggestions = (main, score) => {
    const { highlights } = main

    const scoreLayout = score[LAYOUT];
    const scoreFrontend = score[FRONTEND];
    const fetchChecked = doTheyKnowFetch();

    const suggestions = highlights.reduce((acc, sugg) => {
      switch(sugg) {
        case(MINIMAL_UI): 
          if (scoreLayout < 60) {
            return [...acc, allSuggestions[MINIMAL_UI]]
          }
          return acc;
        case(MINIMAL_CLIENT):
          if (scoreFrontend < 60) {
            return [...acc, allSuggestions[MINIMAL_CLIENT]]
          }
          return acc;
        case(DATA_FETCHING):
          if (!fetchChecked) {
            return [...acc, allSuggestions[DATA_FETCHING]]
          }
          return acc;
        case(PUBLIC_API):
          if (fetchChecked) {
            return [...acc, allSuggestions[PUBLIC_API]]
          }
          return acc;
        case(RES_DESIGN_SUGG):
          if (checked.find(item => item.id === RES_DESIGN)) {
            return [...acc, allSuggestions[RES_DESIGN_SUGG]]
          }
          return acc
        case(GAME):
          if (checked.find(item => item.id === GAME_LOGIC)) {
            return [...acc, allSuggestions[GAME]]
          }
          return acc;
        default:
          return acc;
      }
    }, []);

    return suggestions
  }

  const chooseOutcome = (score) => {
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
      return outcomes[ADVANCED_APP]
    }

    if (scoreFrontend <= 70 && score[FRONTEND] > 40) {
      return outcomes[INTERMEDIATE_APP]
    }

    return outcomes[SIMPLE_APP]
  }

  const getResult = () => {
    const score = checked.reduce((acc, question) => {
      const prop = question.cat;

      return {
        ...acc,
        [prop]: acc[prop] + question.points
      }


    }, initialScore);

    const newOutcome = chooseOutcome(score);
    const suggestions = getSuggestions(newOutcome, score)

    setOutcome({main: newOutcome, suggestions, score})
  }

  return [ onChangeChecked, outcome, getResult ];
}

export default useResult;
