const TYPE_CONCEPT = 'CONCEPT';
const TYPE_SKILL = 'SKILL';
const LAYOUTING = 'LAYOUTING';
const CLIENT_SIDE = 'CLIENT_SIDE';
const SERVER_SIDE = 'SERVER_SIDE';

const quizData = {
  [LAYOUTING]: [
    {
      text: 'Reproducing an existing layout',
      type: TYPE_SKILL,
      points: 20
    },
    {
      text: 'Building a layout from scratch',
      type: TYPE_SKILL,
      points: 20
    },
    {
      text: 'Responsive design',
      type: TYPE_SKILL,
      points: 0
    },
    {
      text: 'Flexbox',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'Grids',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'Desing (you are already a designer and/or are very comfortable with design tools)',
      type: TYPE_SKILL,
      points: 10
    },
    {
      text: 'React layouting (JSX)',
      type: TYPE_SKILL,
      points: 25
    },
    {
      text: 'Branding (exceptional use of fonts, colours etc.)',
      type: TYPE_CONCEPT,
      points: 5
    },
  ],
  [CLIENT_SIDE]: [
    {
      text: 'SPA concepts',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'SPA routes vs server routes',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'Application state concepts',
      type: TYPE_CONCEPT,
      points: 20
    },
    {
      text: 'React state/props',
      type: TYPE_SKILL,
      points: 30
    },
    {
      text: 'Global application state',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'React global state',
      type: TYPE_SKILL,
      points: 10
    },
    {
      text: 'Game logic',
      type: TYPE_CONCEPT,
      points: 0
    },
    {
      text: 'Data fetching (read)',
      type: TYPE_SKILL,
      points: 0
    },
    {
      text: 'Data fetching (POST)',
      type: TYPE_SKILL,
      points: 10
    },
  ],
  [SERVER_SIDE]: [
    {
      text: 'Data modelling with NoSQL',
      type: TYPE_CONCEPT,
      points: 10
    },
    {
      text: 'Data persistence',
      type: TYPE_CONCEPT,
      points: 20
    },
    {
      text: 'API routes',
      type: TYPE_CONCEPT,
      points: 15
    },
    {
      text: 'Routes for reading (GET)',
      type: TYPE_SKILL,
      points: 25
    },
    {
      text: 'Routes for writing (POST)',
      type: TYPE_SKILL,
      points: 15
    },
    {
      text: 'Secondary API functionality (search, nested routes etc.)',
      type: TYPE_SKILL,
      points: 10
    },
    {
      text: 'Authentication flow',
      type: TYPE_CONCEPT,
      points: 0
    },
    {
      text: 'Authentication flow and private routes',
      type: TYPE_SKILL,
      points: 0
    },
    {
      text: 'Static files upload',
      type: TYPE_SKILL,
      points: 5
    },
  ]
}

export quizData,{ 
  TYPE_SKILL, 
  TYPE_CONCEPT,
  CLIENT_SIDE,
  LAYOUTING,
  SERVER_SIDE
};