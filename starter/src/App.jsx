import data from './data';
import Questions from './Questions';
import { useState } from 'react';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeID, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeID ? null : id;
    setActiveId(newActiveId);
  }

  return (
    <main>
      <Questions questions={questions} activeID={activeID} toggleQuestion={toggleQuestion} />
    </main>
  );
};

export default App;
