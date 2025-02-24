import React, {useRef } from 'react'

export default function Answers({answers, selectedUserAnswer, answerState, onAnswer}) {

    const shuffledAnswer = useRef();

    if(!shuffledAnswer.current){
        shuffledAnswer.current = [...answers]
        shuffledAnswer.current.sort(()=>Math.random()-0.5)
      }
  return (
    <ul id="answers">
    {shuffledAnswer.current.map((answer)=>{
        let cssClass = '';
        const isSelected = selectedUserAnswer===answer
        if(answerState==='answered'&&isSelected){
          cssClass='selected'
        }
        if((answerState==='correct'||answerState==='wrong')&&isSelected){
          cssClass=answerState
        }
     //   console.log(cssClass)

        return <li key={answer} className="answer">
            <button className={cssClass} onClick={()=>onAnswer(answer)}>{answer}</button>
        </li>
    })}
    </ul>
  )
}

//QUESTIONS[activeQuestionIndex].answers   answers
//userAnswer[userAnswer.length-1]     selectedUserAnswer
//answerState answerState
// handleAnswer   onAnswer