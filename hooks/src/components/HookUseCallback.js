import {useCallback, useState} from 'react'
import List from './List.js'
const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)
    // const getItemsFromDB = () =>{
    //     return ["a", "b", "c"]
    // }
    const getItemsFromDB = useCallback(()=>{
        return ['a', 'b', 'c'];
    }, [])
  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDB}/>
        <button onClick={()=>setCounter(counter+1)}>Change</button>
        <p>{counter}</p>
        <hr/>
    </div>
  )
}

export default HookUseCallback