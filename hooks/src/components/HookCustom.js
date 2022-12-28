import {useState} from 'react'
import usePrevious from '../hooks/usePrevious'
const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)
  return (
    <div>
        <h2>
        HookCustom
        </h2>
        <p>Now: {number }</p>
        <p>Before: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Change</button>
        </div>
  )
}

export default HookCustom