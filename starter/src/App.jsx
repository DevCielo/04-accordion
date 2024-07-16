import data from './data';
import Questions from './Questions';
import { useState } from 'react';

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeID, setActiveId] = useState(null)
  return ( <main>
    <Questions questions={questions} />
  </main>
  )
};
export default App;
