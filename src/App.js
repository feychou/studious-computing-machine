import './App.css';
import {
  quizData,
  CLIENT_SIDE,
  LAYOUTING,
  SERVER_SIDE
} from './quizData';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Final Project Assessment Form</h1>
        <p>
          This quiz will help you assess your skill level 
          and decide on the complexity of your graduation project.
        </p>
        <p>
          The color of the entries matters: <span className="concept color">green</span> entries are about notions and concepts.
          <span className="skill color"> pink</span> entries are about practical skills and implementation.
        </p>
        <p>
          Only tick the <span className="concept color">green</span> entries off when you think you understand something conceptually.
          That is to say, you can describe what this technology's potential is, which problems it addresses etc. 
          The best way is to try to explain them out loud to your rubberducky, 
          your clone or what not, and make sure you're making sense and not stumbling too much. Another way is to see if you can create
          a conceptual map or a diagram about the topic in the entry.        
        </p>
        <p>
          Only tick the <span className="skill color">pink</span> entries off when you feel confident you can use those technologies and/or 
          implement those features.
          If you have already implemented successfully on your own on some project or
          you can visualise a way to implement them by thinking about all the steps it would take to,
          you are probably good to go.
          However, if realise there are too many gaps in your thought process, then it's better not to tick them off.
        </p>

      </header>
      <section>
        <div className="SectionTitle">Layout and Design</div>
        {quizData[LAYOUTING].map(question => (
          <div className={`${question.type.toLowerCase()} Entry`}>
            <input
              id={question.id}
              name="client-side-question"
              type="checkbox"
            />
            <label for={question.id}>
              {question.text}
            </label>
          </div>
        ))}
      </section>
      <section>
        <div className="SectionTitle">Frontend</div>
        {quizData[CLIENT_SIDE].map(question => (
          <div className={`${question.type.toLowerCase()} Entry`}>
            <input
              id={question.id}
              name="client-side-question"
              type="checkbox"
            />
            <label for={question.id}>
              {question.text}
            </label>
          </div>

        ))}
      </section>
      <section>
        <div className="SectionTitle">Server</div>
        {quizData[SERVER_SIDE].map(question => (
          <div className={`${question.type.toLowerCase()} Entry`}>
            <input
              id={question.id}
              name="client-side-question"
              type="checkbox"
            />
            <label for={question.id}>
              {question.text}
            </label>
          </div>

        ))}
      </section>
      <div className="Modal">
        <div className="ModalTitle">Your result</div>
      </div>
    </div>
  );
}

export default App;
