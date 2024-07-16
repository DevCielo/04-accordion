import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import React from 'react';

const SingleQuestion = ({ id, title, info, activeID, toggleQuestion }) => {
  const isActive = id === activeID;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className={isActive ? 'show' : ''}>{info}</p>
    </article>
  );
}

export default SingleQuestion;
