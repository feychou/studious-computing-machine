// type of question
const TYPE_CONCEPT = 'CONCEPT';
const TYPE_SKILL = 'SKILL';

// main areas
const LAYOUTING = 'LAYOUTING';
const CLIENT_SIDE = 'CLIENT_SIDE';
const SERVER_SIDE = 'SERVER_SIDE';

// question ids
const REP_LAYOUT = 'REP_LAYOUT_SKILL';
const BUILD_LAYOUT = 'BUILD_LAYOUT';
const RES_DESIGN = 'RES_DESIGN';
const FLEXBOX = 'FLEXBOX';
const GRIDS = 'GRIDS';
const UI_DESIGN = 'UI_DESIGN';
const REACT_LAYOUT = 'REACT_LAYOUT';
const BRANDING = 'BRANDING';
const SPA = 'SPA';
const SPA_ROUTES = 'SPA_ROUTES';
const APP_STATE = 'APP_STATE';
const REACT_PROPS = 'REACT_PROPS';
const GLOBAL_STATE = 'GLOBAL_STATE';
const REACT_GLOBAL_STATE = 'REACT_GLOBAL_STATE';
const GAME_LOGIC = 'GAME_LOGIC';
const READ_DATA = 'GET_DATA';
const WRITE_DATA = 'WRITE_DATA';
const DATA_MODEL = 'DATA_MODEL';
const DATA_PER = 'DATA_PER';
const API_ROUTES = 'API_ROUTES';
const GET_ROUTES = 'GET_ROUTES';
const POST_ROUTES = 'POST_ROUTES';
const SEC_API = 'SEC_API';
const AUTH = 'AUTH';
const PRIVATE_ROUTES = 'PRIVATE_ROUTES';
const UPLOADS = 'UPLOADS';
const DEPLOYMENT = 'DEPLOYMENT';

const quizData = {
  [LAYOUTING]: [
    {
      id: REP_LAYOUT,
      text: 'Reproducing an existing layout',
      type: TYPE_SKILL,
      points: 20
    },
    {
      id: BUILD_LAYOUT,
      text: 'Building a layout from scratch',
      type: TYPE_SKILL,
      points: 20
    },
    {
      id: RES_DESIGN,
      text: 'Responsive design',
      type: TYPE_SKILL,
      points: 0
    },
    {
      id: FLEXBOX,
      text: 'Flexbox',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: GRIDS,
      text: 'Grids',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: UI_DESIGN,
      text: 'Desing (you are already a designer and/or are very comfortable with design tools)',
      type: TYPE_SKILL,
      points: 10
    },
    {
      id: REACT_LAYOUT,
      text: 'React layouting (JSX)',
      type: TYPE_SKILL,
      points: 25
    },
    {
      id: BRANDING,
      text: 'Branding (exceptional use of fonts, colours etc.)',
      type: TYPE_SKILL,
      points: 5
    },
  ],
  [CLIENT_SIDE]: [
    {
      id: SPA,
      text: 'SPA concepts',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: SPA_ROUTES,
      text: 'SPA routes vs server routes',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: APP_STATE,
      text: 'Application state concepts',
      type: TYPE_CONCEPT,
      points: 20
    },
    {
      id: REACT_PROPS,
      text: 'React state/props',
      type: TYPE_SKILL,
      points: 30
    },
    {
      id: GLOBAL_STATE,
      text: 'Global application state',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: REACT_GLOBAL_STATE,
      text: 'React global state',
      type: TYPE_SKILL,
      points: 10
    },
    {
      id: GAME_LOGIC,
      text: 'Game logic',
      type: TYPE_CONCEPT,
      points: 0
    },
    {
      id: READ_DATA,
      text: 'Data fetching (read/GET)',
      type: TYPE_SKILL,
      points: 0
    },
    {
      id: WRITE_DATA,
      text: 'Data fetching (write/POST)',
      type: TYPE_SKILL,
      points: 10
    },
  ],
  [SERVER_SIDE]: [
    {
      id: DATA_MODEL,
      text: 'Data modelling with NoSQL',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      id: DATA_PER,
      text: 'Data persistence',
      type: TYPE_CONCEPT,
      points: 20
    },
    {
      id: API_ROUTES,
      text: 'API routes',
      type: TYPE_CONCEPT,
      points: 15
    },
    {
      id: GET_ROUTES,
      text: 'Routes for reading (read/GET)',
      type: TYPE_SKILL,
      points: 20
    },
    {
      id: POST_ROUTES,
      text: 'Routes for writing (write/POST)',
      type: TYPE_SKILL,
      points: 15
    },
    {
      id: SEC_API,
      text: 'Secondary API functionality (search, nested routes etc.)',
      type: TYPE_SKILL,
      points: 10
    },
    {
      id: DEPLOYMENT,
      text: 'Deployment of server on Heroku',
      type: TYPE_SKILL,
      points: 5
    },
    {
      id: AUTH,
      text: 'Authentication flow',
      type: TYPE_CONCEPT,
      points: 0
    },
    {
      id: PRIVATE_ROUTES,
      text: 'Authentication flow and private routes',
      type: TYPE_SKILL,
      points: 0
    },
    {
      id: UPLOADS,
      text: 'Static files upload',
      type: TYPE_SKILL,
      points: 5
    },
  ]
}

export {
  quizData, 
  TYPE_SKILL, 
  TYPE_CONCEPT,
  CLIENT_SIDE,
  LAYOUTING,
  SERVER_SIDE
};