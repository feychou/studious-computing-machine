const FULL_STACK_AUTH = 'FULL_STACK_AUTH';
const FULL_STACK = 'FULL_STACK';
const ADVANCED_SPA = 'ADVANCED_SPA';
const MEDIUM_SPA = 'MEDIUM_SPA';
const SIMPLE_SPA = 'SIMPLE_SPA';
const MINIMAL_CLIENT = 'MINIMAL_CLIENT';
const RESPONSIVE_DESIGN = 'RESPONSIVE_DESIGN';
const MINIMAL_UI = 'MINIMAL_UI';
const PUBLIC_API = 'PUBLIC_API';
const GAME = 'GAME';
const DATA_FETCHING = 'DATA_FETCHING';


const outcomes = {
  [FULL_STACK_AUTH]: {
    title: 'Full Stack Web App with Authorisation',
    desc: [
      'This type of application consists of three main parts: a backend with data persistence, a client that communicates with it through an API and an authorisation flow',
      'It is the most advanced type of application, but you may be able to tackle it!'
    ],
    examples: ['Job searching platform', 'E-commerce app'],
    links: [],
    highlights: [
      MINIMAL_CLIENT,
      MINIMAL_UI,
      RESPONSIVE_DESIGN,
      DATA_FETCHING
    ]
  },
  [FULL_STACK]: {
    title: 'Full Stack Web App (No authorisation flow)',
    desc: [
      'This type of application consists of two main parts: a backend with data persistence and client that communicates with it through an API',
      'It is an advanced type of application, but you may be able to tackle it'
    ],
    examples: ['Meme generator with storage for images'],
    links: [],
    highlights: [
      MINIMAL_CLIENT,
      MINIMAL_UI,
      RESPONSIVE_DESIGN,
      DATA_FETCHING
    ]
  },
  [ADVANCED_SPA]: {
    title: 'Advanced SPA',
    desc: [
      'This type of application is only client-side.',
      'However, you can stretch its limits: think about complex logic and state management, exploring the HTML media API, data visualisation...',
      'You can get creative with frontend functionalities since you seem to be up to the challenge!'
    ],
    examples: ['Pokemon battle app', 'Language learning app', 'Maps-heavy app'],
    links: [],
    highlights: [
      MINIMAL_UI,
      PUBLIC_API,
      GAME,
      RESPONSIVE_DESIGN
    ]
  },
  [MEDIUM_SPA]: {
    title: 'SPA',
    desc: [
      'This type of application is only client-side.',
      'The advice is to keep it relatively simple: moderate level of component nesting, no global state etc.'
    ],
    examples: ['Pokedex', 'ToDo list', 'this app'],
    links: [],
    highlights: [
      MINIMAL_UI,
      PUBLIC_API,
      GAME,
      RESPONSIVE_DESIGN
    ]
  },
  [SIMPLE_SPA]: {
    title: 'Simple SPA',
    desc: [
      'This type of application is only client-side.',
      'The advice is to keep it very simple, with minimal or no state at all.',
      'Leverage the design and/or the content over the functionality!'
    ],
    examples: ['Portfolio', 'Photography website', 'Text-based adventure'],
    links: [],
    highlights: [RESPONSIVE_DESIGN]
  }
}

export {
  outcomes,
  FULL_STACK_AUTH,
  FULL_STACK,
  ADVANCED_SPA,
  MEDIUM_SPA,
  SIMPLE_SPA,
  MINIMAL_UI,
  MINIMAL_CLIENT,
  DATA_FETCHING,
  PUBLIC_API,
  RESPONSIVE_DESIGN,
  GAME
}