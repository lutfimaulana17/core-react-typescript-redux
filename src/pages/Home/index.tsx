import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const stateGlobal = useSelector(state => state)
  console.log('redux state', stateGlobal)
  
  return (
    <div>
      <h1>Hello Home Page!</h1>
    </div>
  )
}

export default Home
