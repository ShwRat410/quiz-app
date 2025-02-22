import { useEffect, useState } from "react"
import React from 'react'

export default function QuestionTimer({timeout,onTimeout}){

    const[remainingTime,setRemainingTime]=useState(timeout)

    useEffect(()=>{
        console.log("INTERVAL")
        const interval = setInterval(()=>{
            setRemainingTime((prevUpdatedTime)=>prevUpdatedTime-100)
        },100)
        return(()=>{
            clearInterval(interval)
        })
    },[])

    useEffect(()=>{
        console.log("TIMEOUT")
        const timer = setTimeout(()=>{
            onTimeout()
        },timeout)
        return(()=>{
            clearTimeout(timer)
        })
    },[timeout,onTimeout])

    return(
        <progress id="question-time" value={remainingTime} max={timeout}/>
    )
}

