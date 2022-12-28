import React from 'react'
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext.js'
const About = () => {
  const {contextValue, context} = useContext(SomeContext)
  return (
    <div>about
      <p>You can see the value of teh context here too: {context}, {contextValue}</p>
    </div>
  )
}

export default About