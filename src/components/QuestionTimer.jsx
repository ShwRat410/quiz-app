import { useEffect, useState } from "react"
import React from 'react'

export default function QuestionTimer({timeout,onTimeout}){

    const[remainingTime,setRemainingTime]=useState(timeout)

    useEffect(()=>{
        console.log("INTERVAL")
        setInterval(()=>{
            setRemainingTime((prevUpdatedTime)=>prevUpdatedTime-100)
        },100)
    },[])

    useEffect(()=>{
        console.log("TIMEOUT")
        setTimeout(()=>{
            onTimeout()
        },timeout)
    },[timeout,onTimeout])

    return(
        <progress id="question-time" value={remainingTime} max={timeout}/>
    )
}

