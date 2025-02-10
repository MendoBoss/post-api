'use client'
import React from 'react'
import { useAppSelector } from './hooks'
import Public from './public/Public';
import Private2 from './private/Private2';


const Home = () => {
  const user = useAppSelector((state)=>state.user);

  return (
    <div>
      {
        !(user === null)? <Private2/> : <Public/>
      }
    </div>
  )
}

export default Home