import React, { useState,useCallback } from 'react'
import QUESTIONS from '../questions.js'
import image from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';

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
  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswer.sort(()=>Math.random()-0.5)
  return (   
    <div id="quiz">
        <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
            {shuffledAnswer.map((answer)=>{
                let cssClass = '';
                const isSelected = userAnswer[userAnswer.length-1]===answer
                if(answerState==='answered'&&isSelected){
                  cssClass='selected'
                }
                if((answerState==='correct'||answerState==='wrong')&&isSelected){
                  cssClass=answerState
                }
             //   console.log(cssClass)

                return <li key={answer} className="answer">
                    <button className={cssClass} onClick={()=>handleAnswer(answer)}>{answer}</button>
                </li>
            })}
        </ul>
    </div>

    </div> 
  )
}

//questions[0][text]
//questions[0].answers[0]