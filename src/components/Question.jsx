import React from 'react'
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({onTimeout,answers,selectedUserAnswer,answerState,onAnswer,questionText}) {
    
  return (
  <div id="question">
    <QuestionTimer 
      //  key={activeQuestionIndex} 
        timeout={10000} 
        onTimeout={onTimeout}
    ></QuestionTimer>
    <p>{questionText}</p>
    <Answers
      //  key={activeQuestionIndex}
        answers={answers}
        selectedUserAnswer={selectedUserAnswer}
        answerState={answerState}
        onAnswer={onAnswer}
    ></Answers>
  </div>
  )
}

//onTimeout   