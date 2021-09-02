import {
  LAYOUT,
  FRONTEND
} from './quizData';
const FULL_STACK_AUTH = 'FULL_STACK_AUTH';
const FULL_STACK = 'FULL_STACK';
const ADVANCED_APP = 'ADVANCED_SPA';
const INTERMEDIATE_APP = 'MEDIUM_SPA';
const SIMPLE_APP = 'SIMPLE_SPA';
const MINIMAL_CLIENT = 'MINIMAL_CLIENT';
const RESPONSIVE_DESIGN = 'RESPONSIVE_DESIGN';
const MINIMAL_UI = 'MINIMAL_UI';
const PUBLIC_API = 'PUBLIC_API';
const GAME = 'GAME';
const DATA_FETCHING = 'DATA_FETCHING';

const suggestions = {
  [MINIMAL_UI]: {
    text: 'Try to keep your layout minimal',
    reason: `you scored poorly in ${LAYOUT}.`
  },
  [MINIMAL_CLIENT]: {
    text: 'Try to keep your client minimal, avoiding nested props or global state.',
    reason: `you scored poorly in ${FRONTEND}.`
  },
  [RESPONSIVE_DESIGN]: {
    text: 'Consider making your app responsive',
    reason: 'you ticked the question related to responsive design.'
  },
  [DATA_FETCHING]: {
    text: 'Make sure you reviews data fetching in React',
    reason: `you did not tick the ${FRONTEND} questions related to data fetching (POST and GET).`
  },
  [PUBLIC_API]: {
    text: 'Consider using a public API',
    reason: `you ticked the ${FRONTEND} questions related to data fetching (POST and GET).`
  },
  [GAME]: {
    text: 'Consider something game-like, for instance a simple puzzle game or a gamified educational app',
    reason: 'you ticked the game logic question.'
  }
}

const fullStackAuth = {
  title: 'Full Stack Web App with Authorisation',
  desc: [
    'This type of application consists of three main parts: a backend with data persistence, a client that communicates with it through an API and an authorisation flow',
    'It is the most advanced type of application, but you may be able to tackle it!'
  ],
  examples: ['Job searching platform', 'E-commerce app'],
  links: [
    {
      title: 'App for bands to centralise all their material',
      live: 'https://backliner.app/signin',
      code: 'https://github.com/Ey-Jay/backliner'
    },
    {
      title: 'App for sharing your meal on video calls',
      live: 'https://share-your-meal.netlify.app/',
      code: 'https://github.com/Priyankavhiremath/share-your-meal_backend'
    },
    {
      title: 'Rick and Morty quiz app with google signup',
      live: 'https://rickysquest.netlify.app/',
      code: 'https://github.com/Ey-Jay/rickysquest'
    }
  ],
  highlights: [
    MINIMAL_CLIENT,
    MINIMAL_UI,
    RESPONSIVE_DESIGN,
    DATA_FETCHING
  ]
}

const fullStack = {
  title: 'Full Stack Web App (No authorisation flow)',
  desc: [
    'This type of application consists of two main parts: a backend with data persistence and client that communicates with it through an API',
    'It is an advanced type of application, but you may be able to tackle it'
  ],
  examples: ['Meme generator with storage for images', 'Next js app'],
  links: [],
  highlights: [
    MINIMAL_CLIENT,
    MINIMAL_UI,
    RESPONSIVE_DESIGN,
    DATA_FETCHING
  ]
}

const advancedApp = {
  title: 'Advanced app/website',
  desc: [
    'This type of application is only client-side.',
    'However, you can stretch its limits: think about complex logic and state management, exploring the HTML media API, having a stab at mobile apps, data visualisation...',
    'You can get creative with frontend functionalities and experiment with browser APIs since you seem to be up to the challenge!'
  ],
  examples: [
    'Pokemon battle app',
    'Language learning app',
    'Maps-heavy app',
    'Interactive text-based story (with choices)',
    'React Native app'
  ],
  links: [
    {
      title: 'App to create and record beats',
      live: 'https://sinkinbeats.com/',
      code: 'https://github.com/JakubJureczko/drum-seq'
    },
    {
      title: 'Meme generator',
      live: 'https://laughing-lamarr-1ace5c.netlify.app/',
      code: 'https://github.com/Hangrykat/Meme-Generator'
    },
    {
      title: 'Real-time flight scanner',
      live: 'https://aviate.live/#/',
      code: 'https://github.com/arminebner/aviate'
    }
  ],
  highlights: [
    MINIMAL_UI,
    PUBLIC_API,
    GAME,
    RESPONSIVE_DESIGN
  ]
}

const intermediateApp = {
  title: 'Intermediate app/website',
  desc: [
    'This type of application is only client-side.',
    'The advice is to keep it relatively simple: moderate level of component nesting, no global state, moderate complexity on the business logic side etc.'
  ],
  examples: [
    'ToDo list',
    'this app',
    'Tic Tac Toe',
    'Rock, Paper, Scissors',
    'Pokedex'
  ],
  links: [
    {
      title: 'Rock, Paper, Scissors',
      live: 'https://rock-paper-scissors-gui.netlify.app/',
      code: 'https://github.com/shidoro/rock-paper-scissors-gui'
    },
    {
      title: 'ToDo List',
      live: 'https://tinobrose.github.io/To-do-list/#/todo-list',
      code: 'https://github.com/TinoBrose/To-do-list'
    }
  ],
  highlights: [
    MINIMAL_UI,
    PUBLIC_API,
    GAME,
    RESPONSIVE_DESIGN
  ]
}

const simpleApp = {
  title: 'Simple app/website',
  desc: [
    'This type of application is only client-side.',
    'The advice is to keep it very simple, with no state or very minimal state.',
    'Leverage the design and/or the content over the functionality!'
  ],
  examples: [
    'Portfolio',
    'Photography website',
    'Interactive text-based story (with no or few choices)'
  ],
  links: [
    {
      title: 'Portfolio example 1',
      live: 'https://www.jakubjureczko.com/'
    },
    {
      title: 'Portfolio example 2',
      live: 'https://juliamj.netlify.app/',
      code: 'https://github.com/juliamj/portfolio_'
    },
    {
      title: 'Promotional website for a dental clinic',
      live: 'https://klinger-dent.vercel.app/'
    }
  ],
  highlights: [RESPONSIVE_DESIGN]
}

const outcomes = {
  [FULL_STACK_AUTH]: fullStackAuth,
  [FULL_STACK]: fullStack,
  [ADVANCED_APP]: advancedApp,
  [INTERMEDIATE_APP]: intermediateApp,
  [SIMPLE_APP]: simpleApp
}

export {
  outcomes,
  FULL_STACK_AUTH,
  FULL_STACK,
  ADVANCED_APP,
  INTERMEDIATE_APP,
  SIMPLE_APP,
  MINIMAL_UI,
  MINIMAL_CLIENT,
  DATA_FETCHING,
  PUBLIC_API,
  RESPONSIVE_DESIGN,
  GAME,
  suggestions
}