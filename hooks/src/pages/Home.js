import React from 'react'
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext.js'

import HookUseEffect from '../components/HookUseEffect.js'
import HookUseReducer from '../components/HookUseReducer.js'
import HookUseState from '../components/HookUseState.js'
import HookUseRef from '../components/HookUseRef.js'
import HookUseCallback from '../components/HookUseCallback.js'
import HookUseMemo from '../components/HookUseMemo.js'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect.js'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle.js'
import HookCustom from '../components/HookCustom.js'
const Home = () => {
  const {contextValue, context} = useContext(SomeContext)

  return (
    <div>

    <HookUseState/>
    <HookUseReducer/>
    <HookUseEffect/>
    <h2>Use context</h2>
    <p>Context value: {context}, {contextValue}</p>
    <hr/>
    <HookUseRef/>
    <HookUseCallback/>
    <HookUseMemo/>
    <HookUseLayoutEffect/>
    <HookUseImperativeHandle/>
    <HookCustom/>
    </div>
  )
}

export default Home