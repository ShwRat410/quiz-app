import React, { useState,useCallback } from 'react'
import QUESTIONS from '../questions.js'
import image from '../assets/quiz-complete.png'
import Question from './Question.jsx';

export default function Quiz() {

//  const[activeQuestionIndex,useActiveQuestionIndex]=useState()
  const[userAnswer,setUserAnswer]=useState([]);
  const[answerState,setAnswerState]=useState('');
  const activeQuestionIndex = answerState===''?userAnswer.length:userAnswer.length-1

  const quizIsComplete = QUESTIONS.length===activeQuestionIndex

  const handleAnswer = useCallback(
    function handleAnswer(selectedAnswer){
      setAnswerState("answered")
      setUserAnswer((prevState)=>{
      return [...prevState,selectedAnswer]
    })
    setTimeout(()=>{
      if(selectedAnswer===QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerState('correct')
      }
      else{
        setAnswerState('wrong')
      }
      setTimeout(()=>{
        setAnswerState('')
      },2000)
    },1000)
  },[activeQuestionIndex])


  const handleSkipAnswer = useCallback(()=>{
    handleAnswer(null)
  },[handleAnswer])

  if(quizIsComplete){
    return(
        <div id="summary">
            <img src={image} alt="quiz complete"/>
            <h2>Quiz completed</h2>
        </div>
    )
  }


  return (   
    <div id="quiz">
      <Question
      key={activeQuestionIndex}
      onTimeout={handleSkipAnswer}
      answers={QUESTIONS[activeQuestionIndex].answers}
      selectedUserAnswer={userAnswer[userAnswer.length-1]}
      answerState={answerState}
      onAnswer={handleAnswer}
      questionText={QUESTIONS[activeQuestionIndex].text}
      ></Question>
    </div> 
  )
}

//QUESTIONS[activeQuestionIndex].answers   answers
//userAnswer[userAnswer.length-1]     selectedUserAnswer
//answerState answerState
// handleAnswer   onAnswer