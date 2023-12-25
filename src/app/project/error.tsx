"use client"
import {useEffect} from 'react';

type Data = {
    error : Error,
    reset : VoidFunction;
}

export default function Error({error,reset}:Data){
    useEffect(()=>{
        console.log(error)
    },[error])

    return(
        <div>
            <h2>Something when wrong</h2>
            <button onClick={()=> reset()}>Reset</button>
        </div>
    )
}