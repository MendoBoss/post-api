'use client'
import React from 'react'
import { useAppSelector } from './hooks'

const Home = () => {
  const counter = useAppSelector((state)=>state.counter);
  const stagiaire = useAppSelector((state)=>state.stagiaire);
  console.log("stagiaire : ", stagiaire.value);
  return (
    <div>
            <h1 className="text-center mt-10 text-5xl">Home</h1>
            <h1 className="text-center mt-10 text-3xl">{counter.value}</h1>

    </div>
  )
}

export default Home