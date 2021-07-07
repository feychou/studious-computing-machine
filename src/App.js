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
          The color of the entries matters: <span className="concept color">green</span> entries are about notions or concepts,
          <span className="skill color"> pink</span> entries are about skills.
        </p>
        <p>
          Only tick off the <span className="concept color">green</span> entries when you think you understand the concepts they represent.
          The best way is to try to explain them out loud to your rubberducky, 
          your clone or what not, and make sure you're making sense and not stumbling too much.          
        </p>
        <p>
          The <span className="skill color">pink</span> entries can be thought off as skills.
          Only tick them off when you feel confident you could implement them.
          If you have already implemented successfully on your own on some project or
          you can visualise a way to implement them by thinking about all the steps it would take to,
          you are probably good to go.
          However, if realise there are too many gaps in your thought process, then it's better not to tick them off.
        </p>

      </header>
      <section>
        <div className="SectionTitle">Frontend</div>
        {quizData[CLIENT_SIDE].map(question => (
          <div className={question.type.toLowerCase()}>
            <label>
              <input
                name="client-side-question"
                type="checkbox"
              />
              {question.text}
            </label>
          </div>
        ))}
      </section>
      <section>
      </section>
      <section>
      </section>
    </div>
  );
}

export default App;
