import React, { useState } from 'react'
import QUESTIONS from '../questions.js'
import image from '../assets/quiz-complete.png'

export default function Quiz() {

//  const[activeQuestionIndex,useActiveQuestionIndex]=useState()
  const[userAnswer,setUserAnswer]=useState([]);
  const activeQuestionIndex=userAnswer.length

  const quizIsComplete = QUESTIONS.length===activeQuestionIndex

  function handleAnswer(selectedAnswer){
    setUserAnswer((prevState)=>{
    return [...prevState,selectedAnswer]
  })
  }

  if(quizIsComplete){
    return(
        <div id="summary">
            <img src={image} alt="quiz complete"/>
            <h2>Quiz completed</h2>
        </div>
    )
  }
  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswer.sort(()=>Math.random()-0.5)

  return (   
    <div id="quiz">
        <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
            {shuffledAnswer.map((answer)=>{
                return <li key={answer} className="answer">
                    <button onClick={()=>handleAnswer(answer)}>{answer}</button>
                </li>
            })}
        </ul>
    </div>

    </div> 
  )
}

//questions[0][text]
//questions[0].answers[0]